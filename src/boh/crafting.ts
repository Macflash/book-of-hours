import { ItemData } from "../data/item_data";
import { PrototypeData } from "../data/prototype_data";
import { WorkstationData } from "../data/workstation_data";
import {
  AddAspectsInplace,
  AspectMap,
  MatchesRequiredAspects,
} from "./aspects";
import { Save } from "./save";
import { Workstation } from "./workstation";

function GetPrototype(id: string) {
  const data = PrototypeData.find((p) => p.id == id);
  if (!data) throw new Error(`Couldn't find prototype ${id}`);

  let proto: Item = { id: data.id, label: data.id, ...data.aspects };
  if (data.inherits) {
    const nested = GetPrototype(data.inherits);
    AddAspectsInplace(proto, nested);
  }
  return proto;
}

export const Items = GenerateItems();
export const Memories = Items.filter((i) => i.memory) as Memory[];

/** @deprecated Use save data instead */
export const FavMemories: Memory[] = [
  "mem.fear",
  "mem.scent",
  "didumos",
  "windinwaiting",
  "ascendant.harmony",
  "wormwood.dream",
  "old.wound",
  "forbidden.epic",
  "invincible.audacity",
  "enduring.reflection",
  "earthsign",
  "numen.desc",
  "numen.loop",
  "numen.thre",
  "numen.worl",
  "numen.bala",
  "numen.oldl",
].map((id) => GetItemById(id)! as Memory);

export function IsFavMemory(id: string) {
  return FavMemories.some((m) => m.id == id);
}

export function GetItemById(id: string, items = Items) {
  return items.find((item) => item.id == id);
}

function GenerateItems() {
  return ItemData.map((data) => {
    let item: Item = { id: data.ID, label: data.Label };
    if (data.aspects) item = { ...item, ...data.aspects };
    if (data.inherits) {
      const proto = GetPrototype(data.inherits);
      AddAspectsInplace(item, proto);
    }
    const spawns = data.xtriggers?.scrutiny?.[0];
    if (spawns) item.consider_spawn_id = spawns.id;

    return item;
  });
}

export function GetItemsByConsiderSpawnId(id: string, items = Items): Item[] {
  return items.filter((i) => i.consider_spawn_id == id);
}

export function GetMatchingItems(
  required: AspectMap,
  essential?: AspectMap,
  items = Items
) {
  return items.filter(
    (i) =>
      (!essential || MatchesRequiredAspects(essential, i)) &&
      MatchesRequiredAspects(required, i)
  );
}

export interface Item extends AspectMap {
  id: string;
  label: string;
  location?: string;

  /** Anything that spawns when you consider it */
  consider_spawn_id?: string;
}

export interface Memory extends Item {}

export function GetAvailableMemoriesFromSave(save: Save) {
  const memories = new Set<string>();

  for (const item of save.items) {
    if (item.memory) memories.add(item.id);
    if (item.consider_spawn_id) memories.add(item.consider_spawn_id);
  }

  for (const book of save.books) {
    // Re-reading is easy, if you haven't mastered, you probably can't...
    if (book.mastered) memories.add(book.reading.id);
  }

  // TODO: what about crafting a memory from a skill?

  return [...memories].map((id) => GetItemById(id) as Memory);
}
