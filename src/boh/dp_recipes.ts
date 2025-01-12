// OH snaps is this a dynamic programming problem or WHAT!

import {
  AddAspectsInplace,
  Aspect,
  AspectMap,
  AspectValue,
  PositiveAspects,
  SortByAspect,
} from "./aspects";
import { Item } from "./items";
import { GetAvailableMemoriesFromSave } from "./memories";
import { Principle, Principles, SumPrinciples } from "./principles";
import { Recipe, Recipes } from "./recipes";
import { Save } from "./save";
import { Skill } from "./skills";
import { Souls } from "./souls";
import {
  FindMatchingSlots,
  GetSlotablesFromSave,
  GetWorkstationSlots,
  MatchesSlot,
  Slot,
  Slotable,
  SumSlotAspects,
  WorkstationAsSlotable,
} from "./workstation";

const allRecipeSum: AspectMap = {};
for (const recipe of Recipes) {
  AddAspectsInplace(allRecipeSum, recipe.reqs);
}

const allRecipeAspects = new Set<Aspect>(
  PositiveAspects(allRecipeSum).map(({ aspect }) => aspect)
);
console.log("All recipe aspects", allRecipeAspects);

function ignore({ aspect }: AspectValue) {
  return allRecipeAspects.has(aspect);
}

function aspectKey({ aspect, value }: AspectValue): string {
  return aspect + ":" + value;
}

function sortAspectValueDesc(a: AspectValue, b: AspectValue): number {
  return b.value - a.value;
}

// Creates permu
export function permutations<T>(t: T[]): T[][] {
  let perms = [];
  for (let i = 0; i < t.length; i++) {
    const n = t[i];
    const others = [...t.slice(i + 1)];
    const otherperms = permutations(others);
    perms.push([n]);
    // perms.push(...otherperms);
    perms.push(...otherperms.map((o) => [n, ...o]));
  }
  return perms;
}

// console.log("permutations", permutations([1]));
// console.log("permutations", permutations([1, 2]));
// console.log("permutations", permutations([1, 2, 3]));
// console.log("permutations", permutations([1, 2, 3, 4]));

export function AspectKey(a: AspectMap): string {
  return PositiveAspects(a)
    .filter(ignore)
    .sort(sortAspectValueDesc)
    .map(aspectKey)
    .join();
}

export function PrincipleKeys(a: AspectMap): string[] {
  // I think we only want 1!!! aspect at a time. E.G. try to make it resemble the recipes that it COULD fufill.
  // Recipe would only have wood:1, NEVER wood:2 or wood: 1, tool: 1
  const principles = Principles.filter((p) => a[p] && a[p] > 0);
  const aspects = PositiveAspects(a).filter(ignore);

  return principles.map((p) =>
    aspects
      .filter(
        ({ aspect }) => !Principles.includes(aspect as Principle) || aspect == p
      )
      .sort(sortAspectValueDesc)
      .map(aspectKey)
      .join()
  );
}

// Ideally we would also fill in LOWER values in the map. e.g. Moth:6 is still valid for Moth:5, or 4, etc.
export function PrincipleKeysAndBelow(a: AspectMap): string[] {
  const keys: string[] = [];
  const principles = Principles.filter((p) => a[p] && a[p] > 0);
  const aspects = PositiveAspects(a)
    .filter(ignore)
    .filter(({ aspect }) => !Principles.includes(aspect as Principle));

  for (const principle of principles) {
    for (let pval = a[principle]!; pval > 0; pval--) {
      keys.push(
        [{ aspect: principle, value: pval }, ...aspects]
          .sort(sortAspectValueDesc)
          .map(aspectKey)
          .join()
      );
    }
  }
  return keys;
}

export function PermutationKeys(a: AspectMap): string[] {
  const aspects = PositiveAspects(a).filter(ignore);
  const perms = permutations(aspects);
  return perms
    .map((aspectKeys) => {
      let aspectMap: AspectMap = {};
      for (const { aspect } of aspectKeys) {
        aspectMap[aspect] = a[aspect];
      }
      return aspectMap;
    })
    .map(AspectKey);
}

export const DPMap = new Map<string, Slotable[]>();

function WithoutAspect(a: AspectMap, aspect: Aspect): AspectMap {
  const b = { ...a };
  delete b[aspect];
  return b;
}

function WithoutAspectPrefix(a: AspectMap, prefix: string): AspectMap {
  const aspect = Object.keys(a).find((s) => s.startsWith(prefix)) as Aspect;
  return WithoutAspect(a, aspect);
}

export function AddToMap(slotables: Slotable[]) {
  const aspectsum = SumSlotAspects(slotables);

  // Separate out chandlery.
  if (aspectsum["skill.chandlery"]) {
    // TODO!
    delete aspectsum["skill.chandlery"];
    // const skillsum = WithoutAspect(aspectsum, "skill.chandlery");
    // AddKeysToMap(PrincipleKeys(skillsum), slotables);

    // const chandsum = WithoutAspectPrefix(aspectsum, "s.");
    // AddKeysToMap(PrincipleKeys(chandsum), slotables);
    // return;
  }

  // TODO: Separate out effective contamination skills.
  // e.g. "effective." Not used in regular recipes, but useful for curing!
  // Also LANGUAGEs for reading are needed!

  AddKeysToMap(PrincipleKeysAndBelow(aspectsum), slotables);

  // Remove some of the other apects to make them more general?
  AddKeysToMap(
    PrincipleKeysAndBelow(WithoutAspect(aspectsum, "memory")),
    slotables
  );

  //   // This explodes in size.
  //   const keys = PermutationKeys(aspectsum);
  //   console.log("keys", keys.length);
  //   for (const pkey of keys) {
  //     if (!DPMap.has(pkey)) DPMap.set(pkey, slotables);
  //   }
}

function AddKeysToMap(keys: string[], slotables: Slotable[]) {
  for (const key of keys) {
    if (!DPMap.has(key)) DPMap.set(key, slotables);
  }
}

// exhaustively. And I mean EXhausting!
let maxDepth = 0;
export function PopulateDPMapFromSave(save: Save, depth = 2) {
  // Don't recalc!
  if (depth <= maxDepth) return;
  maxDepth = depth;
  console.log("populating", depth);
  const { souls, skills } = save;
  const memories = GetAvailableMemoriesFromSave(save, true);
  const slotables = GetSlotablesFromSave(save, true); // This might not be right.

  // Go through workstations and add more detailed stufF!
  for (const ws of save.workstations) {
    const workstationAsSlotable = WorkstationAsSlotable(ws);
    const { slots } = ws;
    const soulSlot = slots.find((s) => s.id == "a")!;
    const skillSlot = slots.find((s) => s.id == "s")!;
    const memorySlot = slots.find((s) => s.id == "m")!;
    const otherSlots = slots.filter(
      (s) => s != soulSlot && s != skillSlot && s != memorySlot
    );
    // 31 perms, but actually soul and skill ALWAYS must be set.
    // Only 7 perms with soul and skill always set!
    for (const soul of souls.filter((s) => MatchesSlot(soulSlot, s))) {
      for (const skill of skills.filter((s) => MatchesSlot(skillSlot, s))) {
        AddToMap([workstationAsSlotable, soul, skill]);

        if (depth < 3) continue;
        for (const memory of memories.filter((m) =>
          MatchesSlot(memorySlot, m)
        )) {
          AddToMap([workstationAsSlotable, soul, skill, memory]);

          if (depth < 4) continue;
          for (const otherSlot of otherSlots) {
            const matchingSlotables = slotables.filter((slotable) =>
              MatchesSlot(otherSlot, slotable)
            );
            for (const slotable1 of matchingSlotables) {
              if (
                slotable1 == memory ||
                slotable1 == skill ||
                slotable1 == soul
              )
                continue;
              AddToMap([workstationAsSlotable, soul, skill, memory, slotable1]);

              if (depth < 5) continue;
              // DEPTH 5 just is WAY too slow!!
              // TODO: final slot kinda?
              for (const lastSlot of otherSlots) {
                if (otherSlot == lastSlot) continue;
                if (otherSlot == otherSlots[1]) continue;
                const matchingSlotables2 = slotables.filter((slotable) =>
                  MatchesSlot(lastSlot, slotable)
                );
                for (const slotable2 of matchingSlotables2) {
                  if (
                    slotable2 == slotable1 ||
                    slotable2 == memory ||
                    slotable2 == skill ||
                    slotable2 == soul
                  )
                    continue;
                  AddToMap([
                    workstationAsSlotable,
                    soul,
                    skill,
                    memory,
                    slotable1,
                    slotable2,
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }

  console.log("Populated", depth, DPMap);
  return DPMap;
}

interface RecipeSolution {
  firstSolution: Slotable[];
  solutions: Slotable[][];
  recipe: Recipe;
  skill: Skill;
  principle: Principle;
  principleAmount: number;
  otherReq: Aspect;
}

let lastSave: Save | null = null;
let lastResult: RecipeSolution[] = [];

export function PopulateDpMapByRecipes(save: Save): RecipeSolution[] {
  if (lastSave == save) {
    console.log("Cached");
    return lastResult;
  }
  const start = Date.now();
  console.log("Populating...");

  // tools and comforts for now.
  // Hmm! this doesn't let you use a tool twice if you have two.
  const tools = save.items.filter((i) => i.tool);
  const uniqueTools = UniqueByAspects(tools);
  const comforts = UniqueByAspects(save.items.filter((i) => i.comfort));
  const wallart = UniqueByAspects(save.items.filter((i) => i.wallart));
  // Let's ignore these for now!
  const others = save.items.filter(
    (i) => !i.tool && !i.comfort && !i.wallart && !i.fixed
  ) as Slotable[];
  console.log("tools", tools, uniqueTools);
  console.log("comforts", comforts);
  console.log("wallart", wallart);
  console.log("others", others);

  const items = [...tools, ...comforts, ...wallart];
  console.log("items", items, save.items.length);

  // Again... this doesn't include CRAFTABLE memories. e.g. cheerful ditty, etc.
  // Ideally we do all prentice recipes and include successful outputs as inputs for later crafting?
  const memories = GetAvailableMemoriesFromSave(save, true);
  console.log("memories", memories);

  // Used for the last slots in the workstations, which could take a lot of things.
  const allSlotables: Slotable[] = [...items, ...memories, ...save.souls];

  // OK! for each recipe, we want to only care about the aspects it needs.
  const recipesToTry = Recipes.filter((recipe) =>
    save.skills.find((s) => s.id == recipe.skill)
  ).map((recipe) => {
    const skill = save.skills.find((s) => s.id == recipe.skill)!;
    const principle = Principles.find((p) => recipe.reqs[p])!;
    const otherReqs = PositiveAspects(recipe.reqs).filter(
      ({ aspect }) =>
        !aspect.startsWith("s.") && aspect != "ability" && aspect != principle
    );
    if (otherReqs.length > 1) throw `2 reqs! ${otherReqs.join()}`;
    return {
      recipe,
      skill,
      principle,
      principleAmount: recipe.reqs[principle]!,
      otherReq: otherReqs[0]?.aspect,
    };
  });
  console.log("recipesToTry", recipesToTry, Recipes.length);

  // Prentice don't require other aspects.
  const prentice = recipesToTry.filter((r) => r.principleAmount == 5);
  // All scholar and keeper recipes require other aspects.
  const scholar = recipesToTry.filter((r) => r.principleAmount == 10);
  const keeper = recipesToTry.filter((r) => r.principleAmount == 15);
  console.log("prentice", prentice);
  console.log("scholar", scholar);
  console.log("keeper", keeper);

  const recipeResults = [...prentice, ...scholar, ...keeper]
    .map((recipeData) => {
      const { recipe, skill, principle, otherReq, principleAmount } =
        recipeData;

      function meetsReqs(used: Slotable[]) {
        const sum = SumSlotAspects(used);
        return sumMeetsReqs(sum);
      }

      function sumMeetsReqs(sum: AspectMap) {
        if (otherReq && !sum[otherReq]) return false;
        return sum[principle]! >= principleAmount;
      }

      console.log(recipe.id);
      if (otherReq) console.log("othereq", otherReq);
      const workstations = save.workstations.filter((ws) =>
        FindMatchingSlots(ws, skill)
      );
      if (!workstations.length) return null;
      console.log("workstations", workstations);

      // Basically just use the FIRST one you can from the souls.
      const orderedSouls = save.souls.sort(SortByAspect(principle));
      const workstationsWithSoulAndSkill = workstations
        .map((workstation) => {
          const slots = GetWorkstationSlots(workstation);
          if (!MatchesSlot(slots.skill, skill)) return null;

          const bestSoul = orderedSouls.find((soul) =>
            MatchesSlot(slots.soul, soul)
          );
          if (!bestSoul) return null;

          const usedSoFar: Slotable[] = [
            WorkstationAsSlotable(workstation),
            skill,
            bestSoul,
          ];
          AddToMap(usedSoFar);

          const sumSoFar = SumSlotAspects(usedSoFar);
          return {
            usedSoFar,
            memorySlot: slots.memory,
            otherSlots: slots.others,
            sumSoFar,
            meetsReqs: sumMeetsReqs(sumSoFar),
          };
        })
        .noNulls();

      const solutions1 = workstationsWithSoulAndSkill
        .filter(({ meetsReqs }) => meetsReqs)
        .map(({ usedSoFar }) => usedSoFar)
        .noNulls();
      if (solutions1.length) return { ...recipeData, solutions: solutions1 };

      // Restrict to memories and items that match the principle OR another aspect.
      const orderedMemories = memories
        .filter((m) => m[principle] || m[otherReq])
        .filter((m) => m.id != recipe.result)
        .sort(SortByAspect(principle));
      const withMemory = workstationsWithSoulAndSkill.map(
        ({ usedSoFar, memorySlot, otherSlots }) => {
          const barelyMeetsReqs = orderedMemories.findIndex(
            (m) => MatchesSlot(memorySlot, m) && meetsReqs([...usedSoFar, m])
          );
          if (barelyMeetsReqs > 1) {
            const goodEnough = orderedMemories[barelyMeetsReqs - 1];
            if (goodEnough) {
              // console.log("good enough!", goodEnough);
              usedSoFar.push(goodEnough);
              AddToMap(usedSoFar);
              const sumSoFar = SumSlotAspects(usedSoFar);
              return { usedSoFar, sumSoFar, meetsReqs: true, otherSlots: [] };
            }
          }

          const bestMemory = orderedMemories.find((m) =>
            MatchesSlot(memorySlot, m)
          );
          if (bestMemory) {
            usedSoFar.push(bestMemory);
            AddToMap(usedSoFar);
          }

          const sumSoFar = SumSlotAspects(usedSoFar);
          return {
            usedSoFar,
            sumSoFar,
            meetsReqs: sumMeetsReqs(sumSoFar),
            otherSlots,
          };
        }
      );

      const solutions2 = withMemory
        .filter(({ meetsReqs }) => meetsReqs)
        .map(({ usedSoFar }) => usedSoFar)
        .noNulls();
      if (solutions2.length) return { ...recipeData, solutions: solutions2 };

      const orderedItems = items
        .filter((i) => i[principle] || i[otherReq])
        .filter((i) => i.id != recipe.result)
        .sort(SortByAspect(principle));
      console.log("ordered", orderedMemories, orderedItems);

      function doSlot(usedSoFar: Slotable[], slotToUse: Slot, lastSlot?: Slot) {
        const otherReqFufilled =
          !otherReq || SumSlotAspects(usedSoFar)[otherReq];
        const fitsInslot = allSlotables
          .filter((s) => MatchesSlot(slotToUse, s) && s.id != recipe.result)
          .notIn(usedSoFar);

        // if (recipe.result == "mazarine.fife") debugger;

        // try to match the otherreq if needed
        const matchesOtherReq = fitsInslot
          .filter((s) => otherReqFufilled || s[otherReq])
          .sort(SortByAspect(principle));
        let bestMatch = matchesOtherReq[0];
        if (!bestMatch) {
          // nothing matches the req... try the secret items!
          const specialItems = others
            .notIn(usedSoFar)
            .filter((i) => i.id !== recipe.result)
            .filter(
              (i) =>
                (otherReqFufilled || i[otherReq]) && MatchesSlot(slotToUse, i)
            )
            .sort(SortByAspect(principle));
          if (!specialItems.length) return null;
          // console.log("AHA!", specialItems);
          bestMatch = specialItems[0];
        }

        const newUsedSoFar = [...usedSoFar, bestMatch];
        const sumSoFar = SumSlotAspects(newUsedSoFar);
        return {
          usedSoFar: newUsedSoFar,
          sumSoFar,
          meetsReqs: sumMeetsReqs(sumSoFar),
          lastSlot,
        };
      }

      const withSlot1 = withMemory
        .map(({ usedSoFar, otherSlots }) =>
          doSlot(usedSoFar, otherSlots[0], otherSlots[1])
        )
        .noNulls();

      const solutions3 = withSlot1
        .filter(({ meetsReqs }) => meetsReqs)
        .map(({ usedSoFar }) => usedSoFar);
      if (solutions3.length) return { ...recipeData, solutions: solutions3 };

      const withSlot2 = withMemory
        .map(({ usedSoFar, otherSlots }) =>
          doSlot(usedSoFar, otherSlots[1], otherSlots[0])
        )
        .noNulls();
      const solutions4 = withSlot2
        .filter(({ meetsReqs }) => meetsReqs)
        .map(({ usedSoFar }) => usedSoFar);
      if (solutions4.length) return { ...recipeData, solutions: solutions4 };

      const allSlots = [...withSlot1, ...withSlot2]
        .map(({ usedSoFar, lastSlot }) => doSlot(usedSoFar, lastSlot!))
        .noNulls();
      const solutions5 = allSlots
        .filter(({ meetsReqs }) => meetsReqs)
        .map(({ usedSoFar }) => usedSoFar);
      if (solutions5.length) return { ...recipeData, solutions: solutions5 };

      // No solutions i guess.
      if (allSlots.length)
        console.log(
          "Didn't find anything...",
          recipe.id,
          recipe.reqs,
          allSlots
        );
      return null;
    })
    .noNulls();

  // const lastSlot = slots.others.find((s) => s != otherSlot)!;
  // console.log("last slot!", lastSlot);
  // const fitsInLastSlot = allSlotables
  //   .filter((s) => MatchesSlot(lastSlot, s) && s.id != recipe.result)
  //   .notIn(usedInSlots1)
  //   .sort(SortByAspect(principle));
  // if (fitsInLastSlot.length) {
  //   // console.log("fitsInLastSlot", fitsInLastSlot);
  //   const usedInSlots2 = [...usedInSlots1, fitsInLastSlot[0]];
  //   if (meetsReqs(usedInSlots2))
  //     return { recipe, usedInSlots: usedInSlots2 };
  // }

  console.log("recipe results", recipeResults, recipesToTry.length);
  console.log("DPMap", DPMap);

  const bestResults = recipeResults
    .map((data) => ({
      ...data,
      firstSolution: data.solutions[0],
    }))
    .sort((a, b) => a.firstSolution.length - b.firstSolution.length);
  console.log("best results", bestResults);

  lastSave = save;
  lastResult = bestResults;
  console.log("done", Date.now() - start);
  return bestResults;
}

function UniqueByAspects<T extends AspectMap>(items: T[]): T[] {
  const itemAspectMap = new Map<string, T>();
  for (const item of items) {
    const keys = PrincipleKeys(item);
    for (const key of keys)
      if (!itemAspectMap.has(key)) itemAspectMap.set(key, item);
  }
  return [...itemAspectMap.values()].unique();
}
