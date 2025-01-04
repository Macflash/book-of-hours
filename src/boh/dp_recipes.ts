// OH snaps is this a dynamic programming problem or WHAT!

import {
  AddAspectsInplace,
  Aspect,
  AspectMap,
  PositiveAspects,
} from "./aspects";
import { Principle, Principles } from "./principles";
import { Recipes } from "./recipes";
import { Souls } from "./souls";
import { Slotable, SumSlotAspects } from "./workstation";

const allRecipeSum: AspectMap = {};
for (const recipe of Recipes) {
  AddAspectsInplace(allRecipeSum, recipe.reqs);
}

const allRecipeAspects = new Set<Aspect>(PositiveAspects(allRecipeSum));
console.log("All recipe aspects", allRecipeAspects);

function ignore(key: Aspect) {
  return allRecipeAspects.has(key);
  // Legacy manual method.
  //   return (
  //     key != "skill" &&
  //     key != "level" &&
  //     // !key.startsWith("effective.") && // Would want this for some recipes though!!
  //     !key.startsWith("w.") &&
  //     !key.startsWith("difficulty.") &&
  //     !key.startsWith("wisdom.") &&
  //     !key.startsWith("a.") &&
  //     !key.startsWith("boost.")
  //   );
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
    .map((key) => ({ key, val: a[key]! }))
    .sort((a, b) => b.val - a.val)
    .map(({ key, val }) => key + ":" + val)
    .join();
}

export function PrincipleKeys(a: AspectMap): string[] {
  const principles = Principles.filter((p) => a[p] && a[p] > 0);

  const aspects = PositiveAspects(a)
    .filter(ignore)
    .map((key) => ({ key, val: a[key]! }));

  return principles.map((p) =>
    aspects
      .filter(({ key }) => !Principles.includes(key as Principle) || key == p)
      .sort((a, b) => b.val - a.val)
      .map(({ key, val }) => key + ":" + val)
      .join()
  );
}

export function PermutationKeys(a: AspectMap): string[] {
  const aspects = PositiveAspects(a).filter(ignore);
  const perms = permutations(aspects);
  return perms
    .map((aspectKeys) => {
      let aspectMap: AspectMap = {};
      for (const aspect of aspectKeys) {
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
    const skillsum = WithoutAspect(aspectsum, "skill.chandlery");
    AddKeysToMap(PrincipleKeys(skillsum), slotables);

    const chandsum = WithoutAspectPrefix(aspectsum, "s.");
    AddKeysToMap(PrincipleKeys(chandsum), slotables);
    return;
  }

  // TODO: Separate out effective contamination skills.
  // e.g. "effective." Not used in regular recipes, but useful for curing!
  // Also LANGUAGEs for reading are needed!

  AddKeysToMap(PrincipleKeys(aspectsum), slotables);

  // Remove some of the other apects to make them more general?
  AddKeysToMap(PrincipleKeys(WithoutAspect(aspectsum, "memory")), slotables);

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
