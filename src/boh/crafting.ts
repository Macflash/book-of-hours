import { ItemData } from "../data/item_data";
import { PrototypeData } from "../data/prototype_data";
import { WorkstationData } from "../data/workstation_data";
import { AddAspects, AddAspectsInplace, Aspect, AspectMap } from "./aspects";
import { Principle } from "./principles";

// Recipe -> workstations? or vice-versa?
// Doesn't matter just generate all possible combos?
// TRICK is you can only have 1 of a memory/skill, so this might provide INVALID combos.

export function GetAllWorkstations() {
  // FILTER by the save??
  return WorkstationData.map((ws) => ws as Workstation);
}

export function GenerateAllWorkstationCombos() {
  const combos: Workstation[] = [];
  for (const workstation of WorkstationData) {
    const ws = { ...workstation } as Workstation;
    for (const slot of ws.slots) {
      // find items or memories that fits the slots
      slot.matches = GetMatchingItems(slot.required, slot.essential);
      if (slot.essential?.ability) {
        // TODO: abilities need to come from saves!
        // for(const soul of save)
      }
      if (slot.essential?.skill) {
        // Also: Skills!
      }
    }
    combos.push(ws);
  }
  return combos;
}

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
console.log("Items", Items);

export const Memories = Items.filter((i) => i.memory) as Memory[];

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
      (!essential || MatchesAllRequirements(essential, i)) &&
      MatchesAnyRequirement(required, i)
  );
}

export interface Item extends AspectMap {
  id: string;
  label: string;

  /** Anything that spawns when you consider it */
  consider_spawn_id?: string;
}

export interface Memory extends Item {}

export interface WorkstationSlot {
  id: string;
  label: string;
  // Must match essential if it is there
  essential?: AspectMap;

  // Can match any one of the required
  required: AspectMap;

  matches?: Item[];
}

export interface Workstation {
  id: string;
  label: string;
  slots: WorkstationSlot[];
  hints: Principle[];
}

export function MatchesAnyRequirement(
  required: AspectMap,
  provided: AspectMap
) {
  for (const key in required) {
    const aspect = key as Aspect;
    const r = required[aspect];
    const p = provided[aspect];
    if (!r) continue;
    if (!p) continue;
    if (p >= r) return true;
  }
  return false;
}

export function MatchesAllRequirements(
  required: AspectMap,
  provided: AspectMap
) {
  for (const key in required) {
    const aspect = key as Aspect;
    const r = required[aspect];
    const p = provided[aspect];
    if (!r) continue;
    if (!p) return false;
    if (p < r) return false;
  }
  return true;
}
