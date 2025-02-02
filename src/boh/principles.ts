export type Principle =
  | "edge"
  | "moth"
  | "heart"
  | "grail"
  | "winter"
  | "knock"
  | "lantern"
  | "rose"
  | "sky"
  | "moon"
  | "forge"
  | "nectar"
  | "scale";

export const PrincipleColors: ReadonlyMap<Principle, string> = new Map<
  Principle,
  string
>([
  ["edge", "#D6DE4A"],
  ["forge", "#FF8E3F"],
  ["grail", "#FF614F"],
  ["heart", "#FF7F8C"],
  ["knock", "#B54EFC"],
  ["lantern", "#FFE300"],
  ["moon", "#CBBDD6"],
  ["moth", "#F2EAC3"],
  ["nectar", "#2CD391"],
  ["rose", "#EF64FF"],
  ["scale", "#CB9F4D"],
  ["sky", "#2C69E1"],
  ["winter", "#BDEFFF"],
]);

export function PrincipleColor(p: Principle): string {
  return PrincipleColors.get(p) || "";
}

export const Principles: ReadonlyArray<Principle> = [...PrincipleColors.keys()];

export type PrincipleMap = Partial<{
  [key in Principle]: number;
}>;

export function SumPrinciples(
  principle: Principle,
  ...principledThings: (PrincipleMap | null | undefined)[]
) {
  return AddOr0(...(principledThings || []).map((p) => p?.[principle]));
}

export function PrincipleSum(map: PrincipleMap) {
  let sum = 0;
  for (const p of Principles) sum += Or0(map[p]);
  return sum;
}

export function MinusOr0(a: number | undefined, b: number | undefined): number {
  return Or0(a) - Or0(b);
}

export function AddOr0(...ns: (number | undefined)[]): number {
  let sum = 0;
  for (const n of ns) sum += Or0(n);
  return sum;
}

export function Or0(n: number | undefined) {
  return n ?? 0;
}

export function BestPrinciple(map: PrincipleMap) {
  return Principles.map((p) => ({ p, val: Or0(map[p]) })).sortAsc(
    (x) => x.val
  )[0];
}

export function FindBestByPrinciple<T extends PrincipleMap>(
  principle: Principle,
  things: readonly T[]
): T | null {
  let bestThing: T | null = null;
  let bestValue = 0;
  for (const thing of things) {
    if (Or0(thing?.[principle]) > bestValue) {
      bestValue = Or0(thing[principle]);
      bestThing = thing;
    }
  }

  return bestThing;
}

export function AddPrinciples(a: PrincipleMap, b: PrincipleMap): PrincipleMap {
  const result: PrincipleMap = {};
  for (const principle of Principles) {
    result[principle] = Or0(a[principle]) + Or0(b[principle]);
  }

  return result;
}

export function MapPrinciples(principleMap: PrincipleMap) {
  const map = new Map<Principle, number>();
  for (const principle of Principles) {
    if (!principleMap[principle]) continue;
    map.set(principle, principleMap[principle]);
  }
  return [...map.entries()];
}

export function ForAllPrinciples<TResult>(
  cb: (p: Principle) => TResult
): Map<Principle, NoInfer<TResult>> {
  const resultMap = new Map<Principle, TResult>();
  for (const p of Principles) {
    resultMap.set(p, cb(p));
  }
  return resultMap;
}
