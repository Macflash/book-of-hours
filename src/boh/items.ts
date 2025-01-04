import { ItemData } from "../data/item_data";
import { PrototypeData } from "../data/prototype_data";
import {
  AddAspectsInplace,
  Aspect,
  AspectMap,
  MatchesRequiredAspects,
} from "./aspects";

export interface Item extends AspectMap {
  id: string;
  label: string;
  location?: string;

  /** What id spawns if you consider an item. */
  consider_spawn_id?: string;
  fatigues?: string;
}

function GenerateItems() {
  return ItemData.map((data) => {
    let item: Item = { id: data.ID, label: data.Label };
    item[item.id as Aspect] = 1; // Bootstrap the id as if it was an aspect.
    if (data.aspects) item = { ...item, ...data.aspects };
    if (data.inherits) {
      const proto = GetPrototype(data.inherits);
      // if (proto.fatigues) console.log("proto fatigues!", proto);
      AddAspectsInplace(item, proto); // AH!! only does numbers.
      // if (proto.fatigues && !item.fatigues) throw "FUCK";
    }

    // This item gets destroyed or replaced when used.
    const fatigues = data.xtriggers?.fatiguing;
    if (fatigues) {
      // console.log("fatigues", fatigues);
      item.fatigues = fatigues;
    }

    const spawns = data.xtriggers?.scrutiny?.[0];
    if (spawns) item.consider_spawn_id = spawns.id;

    return item;
  });
}

function GetPrototype(id: string) {
  const data = PrototypeData.find((p) => p.id == id);
  if (!data) throw new Error(`Couldn't find prototype ${id}`);

  let proto: Item = { id: data.id, label: data.id, ...data.aspects };
  if (data.inherits) {
    const nested = GetPrototype(data.inherits);
    AddAspectsInplace(proto, nested);
  }

  // This item gets destroyed or replaced when used.
  const fatigues = data.xtriggers?.fatiguing;
  if (fatigues) {
    // console.log("proto fatigues", fatigues);
    proto.fatigues = fatigues;
  }

  return proto;
}

export const Items = GenerateItems();
console.log("Items", Items);
console.log(
  "items that fatigue",
  Items.filter((i) => i.fatigues)
);
console.log(
  "items that don't fatigue",
  Items.filter((i) => !i.fatigues)
);

export function GetItemById(id: string, items = Items) {
  return items.find((item) => item.id == id);
}

export function GetItemsByConsiderSpawnId(id: string, items = Items): Item[] {
  return items.filter((i) => i.consider_spawn_id == id);
}

/** Returns items that match at least one of the required aspects. */
export function GetItemsByAspects(aspects: AspectMap, items = Items) {
  return items.filter((item) => MatchesRequiredAspects(aspects, item));
}

export function GetMatchingItems(
  required: AspectMap,
  essential?: AspectMap,
  items = Items
) {
  const matchRequiredAspects = GetItemsByAspects(required, items);
  if (essential) return GetItemsByAspects(essential, matchRequiredAspects);
  return matchRequiredAspects;
}
