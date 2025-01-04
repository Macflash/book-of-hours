import {
  Aspect,
  AspectMap,
  MatchesRequiredAspects,
  NoPositiveAspects,
  PositiveAspects,
  SubtractAspects,
} from "./aspects";
import { Items } from "./items";
import { Or0, Principles } from "./principles";
import { Recipes } from "./recipes";
import { GetSkillById } from "./skills";
import { MatchesSlot, Slot, Slotable } from "./workstation";

function GenerateCraftableItems() {
  const recipes = new Set(Recipes.map((r) => r.result));
  return Items.filter((item) => recipes.has(item.id));
}

export const CraftableItems = GenerateCraftableItems();

export function FillSlotsByRequiredAspects(
  slots: Slot[],
  requiredAspects: AspectMap,
  slotables: Slotable[]
) {
  const aspects = PositiveAspects(requiredAspects);
  const skillId = aspects.find((a) => a.startsWith("s."))!;
  const skill = slotables.find((s) => s.id == skillId);
  if (!skill) return null;

  const principle = Principles.find((p) => aspects.includes(p))!;
  const aspectMap = new Map<Aspect, Slotable[]>();
  for (const aspect of aspects) {
    const matching = slotables.filter((s) => (s[aspect] || 0) > 0);
    aspectMap.set(aspect, matching);
    if (!matching.length) {
      console.log("nothing can provide ", aspect);
      return null;
    }
  }

  const skillSlot = slots.find((s) => s.id == "s")!;
  if (!MatchesSlot(skillSlot, skill)) {
    console.log("CANT SLOT SKILL!");
    return null;
  }

  const aspectsAfterSkill = SubtractAspects(requiredAspects, skill);

  const soulSlot = slots.find((s) => s.id == "a")!;
  const memorySlot = slots.find((s) => s.id == "m")!;
  const otherSlots = slots.filter(
    (s) => s != soulSlot && s != skillSlot && s != memorySlot
  );

  // Maybe we should just go through the ASPECTS until they are filled?

  // console.log("Looking for required aspects", skill, principle, aspectMap);

  // Ideally a smaller set of items.
  // Should we sort by minimum cost, or maximum PRINCIPLE?
  const itemsWithAspects = slotables.filter((slotable) =>
    MatchesRequiredAspects(requiredAspects, slotable)
  );
  // .sort((a, b) => Or0(b[principle]) - Or0(a[principle]));
  // lol this is like... ALWAYS all the items.
  // console.log("itemsWithAspects", itemsWithAspects);

  // A set of items that can fill each slot
  const slotMap = new Map<Slot, Slotable[]>();
  for (const slot of slots) {
    const items = itemsWithAspects.filter((item) => MatchesSlot(slot, item));
    slotMap.set(slot, items);
  }

  // memory/items are next cheapest.

  // Always fill the soul!
  // Hmm but what if no soul you have matches the requirements...
  for (const soul of slotMap.get(soulSlot) || []) {
    const soulAspects = SubtractAspects(aspectsAfterSkill, soul);
    // if (NoPositiveAspects(soulAspects)) return { soul };
    // And ideally return the one with the most craftable inputs or the ones with the lowest cost?
    // That could be done just by sorting the sortable list by cost first.

    for (const memory of slotMap.get(memorySlot) || []) {
      const memoryAspects = SubtractAspects(soulAspects, memory);
      if (NoPositiveAspects(memoryAspects)) return { soul, skill, memory };

      // IT'S SO SLOW
      // continue;

      // Other slot 1
      const otherSlot1 = otherSlots[0];
      if (!otherSlot1) continue;
      for (const slotable of slotMap.get(otherSlot1) || []) {
        if (slotable == soul || slotable == memory) continue;
        const slotAspects = SubtractAspects(memoryAspects, slotable);
        if (NoPositiveAspects(slotAspects))
          return { soul, skill, memory, slotable };

        // IT'S SO SLOW
        // continue;
        const otherSlot2 = otherSlots[1];
        if (!otherSlot2) continue;
        for (const slotable2 of slotMap.get(otherSlot2) || []) {
          if (slotable == soul || slotable2 == memory || slotable2 == slotable)
            continue;
          const slot2Aspects = SubtractAspects(slotAspects, slotable2);
          if (NoPositiveAspects(slot2Aspects))
            return { soul, skill, memory, slotable, slotable2 };
        }
      }
    }
  }

  // for each item we can place it in any slot, and see

  return null;
}
