import {
  Aspect,
  AspectMap,
  MatchesRequiredAspects,
  NoPositiveAspects,
  PositiveAspects,
  SubtractAspects,
} from "./aspects";
import { Items } from "./items";
import { Recipes } from "./recipes";
import { MatchesSlot, Slot, Slotable } from "./workstation";

function GenerateCraftableItems() {
  const recipes = new Set(Recipes.map((r) => r.result_ids[0]));
  return Items.filter((item) => recipes.has(item.id));
}

export const CraftableItems = GenerateCraftableItems();

export function FillSlotsByRequiredAspects(
  slots: Slot[],
  requiredAspects: AspectMap,
  slotables: Slotable[]
) {
  const aspects = PositiveAspects(requiredAspects);
  const aspectMap = new Map<Aspect, Slotable[]>();
  for (const aspect of aspects) {
    const matching = slotables.filter((s) => (s[aspect] || 0) > 0);
    aspectMap.set(aspect, matching);
  }

  console.log("Looking for required aspects", aspectMap);

  // Ideally a smaller set of items.
  const itemsWithAspects = slotables.filter((slotable) =>
    MatchesRequiredAspects(requiredAspects, slotable)
  );
  // lol this is like... ALWAYS all the items.
  // console.log("itemsWithAspects", itemsWithAspects.length);

  // A set of items that can fill each slot
  const slotMap = new Map<Slot, Slotable[]>();
  for (const slot of slots) {
    slotMap.set(
      slot,
      itemsWithAspects.filter((item) => MatchesSlot(slot, item))
    );
  }

  // soul HAS to be filled
  // skill should almost always be filled
  // memory/items are next cheapest.

  const soulSlot = slots.find((s) => s.id == "a")!;
  const skillSlot = slots.find((s) => s.id == "s")!;
  const memorySlot = slots.find((s) => s.id == "m")!;
  const otherSlots = slots.filter(
    (s) => s != soulSlot && s != skillSlot && s != memorySlot
  );

  // Always fill the soul!
  for (const soul of slotMap.get(soulSlot) || []) {
    const soulAspects = SubtractAspects(requiredAspects, soul);
    // if (NoPositiveAspects(soulAspects)) return { soul };
    for (const skill of slotMap.get(skillSlot) || []) {
      const skillAspects = SubtractAspects(soulAspects, skill);
      if (NoPositiveAspects(skillAspects)) return { soul, skill };
      // console.log("skillAspects", skillAspects);

      // Check the remaining slots!
      // And ideally return the one with the most craftable inputs or the ones with the lowest cost?
      // That could be done just by sorting the sortable list by cost first.
    }
  }

  // for each item we can place it in any slot, and see

  return null;
}
