import { Item, GetItemById, GetItemsByAspects } from "./items";
import { Save } from "./save";

export interface Memory extends Item {}

export const Memories = GetItemsByAspects({ memory: 1 }) as Memory[];
console.log("Memories", Memories);

// Get a list of all the memories you either have or can get based on your save data.
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

/** @deprecated */
export function IsFavMemory(id: string) {
  return FavMemories.some((m) => m.id == id);
}