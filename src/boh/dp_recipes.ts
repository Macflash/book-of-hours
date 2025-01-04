// OH snaps is this a dynamic programming problem or WHAT!

import { AspectMap, PositiveAspects } from "./aspects";
import { Principle, Principles } from "./principles";
import { Souls } from "./souls";
import { Slotable, SumSlotAspects } from "./workstation";

function ignore(key: string) {
  return (
    key != "skill" &&
    key != "level" &&
    !key.startsWith("w.") &&
    !key.startsWith("wisdom.") &&
    !key.startsWith("a.") &&
    !key.startsWith("boost.")
  );
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

export function AddToMap(slotables: Slotable[]) {
  const aspectsum = SumSlotAspects(slotables);
  //   const key = AspectKey(aspectsum);
  //   if (!DPMap.has(key)) DPMap.set(key, slotables);

  const principleKeys = PrincipleKeys(aspectsum);
  for (const pkey of principleKeys) {
    if (!DPMap.has(pkey)) DPMap.set(pkey, slotables);
  }

  //   // This explodes in size.
  //   const keys = PermutationKeys(aspectsum);
  //   console.log("keys", keys.length);
  //   for (const pkey of keys) {
  //     if (!DPMap.has(pkey)) DPMap.set(pkey, slotables);
  //   }
}
