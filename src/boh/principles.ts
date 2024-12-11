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

export function Or0(n: number | undefined) {
  return n ?? 0;
}

export function FindBestByPrinciple<T extends PrincipleMap>(
  principle: Principle,
  things: readonly T[]
): T {
  let bestThing = things[0];
  let bestValue = 0;
  for (const thing of things) {
    if (Or0(thing[principle]) > bestValue) {
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
