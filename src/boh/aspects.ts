import { Or0, Principle } from "./principles";

export type Aspect =
  | Principle
  | "candle"
  | "wood"
  | "fabric"
  | "metal"
  | "fuel"
  | "omen"
  | "pigment"
  | "flower"
  // Types
  | "material"
  | "root"
  | "instrument"
  | "sustenance"
  | "leaf"
  | "sound"
  | "ink"
  | "liquid"
  | "beverage"
  | "ingredient"
  | "ability" // souls
  | "skill"
  | "device"
  | "memory"
  | "skill"
  | "tool"
  | "record.phonograph"
  | "film"
  | "fatigued"
  | "readable"
  | "blank"
  | "skill.chandlery"
  // More stuff
  | "thing"
  | "remains"
  | "woven"
  | "cooperative"
  | "persistent"
  | "mark"
  | "numen"
  | "omen";

export type AspectMap = Partial<{
  [key in Aspect]: number;
}>;

export function NoPositiveAspects(a: AspectMap) {
  return PositiveAspects(a).length <= 0;
}

export function PositiveAspects(a: AspectMap) {
  return Object.keys(a).filter(
    (k) => k !== "duration" && Number(a[k as Aspect]) > 0
  ) as Aspect[];
}

export function AddAspects(a: AspectMap, b: AspectMap): AspectMap {
  const result: AspectMap = {};
  AddAspectsInplace(result, a);
  AddAspectsInplace(result, b);
  return result;
}

export function SubtractAspects(a: AspectMap, b: AspectMap): AspectMap {
  const result: AspectMap = {};
  AddAspectsInplace(result, a);
  SubtractAspectsInplace(result, b);
  return result;
}

export function AddAspectsInplace(a: AspectMap, b: AspectMap) {
  for (const key in b) {
    const aspect = key as Aspect;
    if (isNaN(Number(b[aspect]))) {
      // If the aspect aint a number, copy it if A doesn't have it.
      if (!a[aspect] && key == "fatigues") a[aspect] = b[aspect];
    } else a[aspect] = Or0(a[aspect]) + Or0(b[aspect]);
  }
}

export function AddASpect(aspect: Aspect, a: AspectMap, b: AspectMap): number {
  return Or0(a[aspect]) + Or0(b[aspect]);
}

export function SubtractAspect(
  aspect: Aspect,
  a: AspectMap,
  b: AspectMap
): number {
  return Or0(a[aspect]) - Or0(b[aspect]);
}

export function SortByAspect(aspect: Aspect) {
  // descending order
  return (a: AspectMap, b: AspectMap) => SubtractAspect(aspect, b, a);
}

export function SubtractAspectsInplace(a: AspectMap, b: AspectMap) {
  for (const key in b) {
    const aspect = key as Aspect;
    if (isNaN(Number(b[aspect]))) continue;
    a[aspect] = Or0(a[aspect]) - Or0(b[aspect]);
  }
}

export function MatchesRequiredAspects(
  required: AspectMap,
  provided: AspectMap
) {
  for (const key in required) {
    const aspect = key as Aspect;
    const r = required[aspect];
    const p = provided[aspect];
    if (!r) continue;
    if (!p) continue;
    if (p >= r) {
      return true;
    }
  }
  return false;
}

export function GetAspectsWithPrefix(aspectable: AspectMap, prefix: string) {
  if (!aspectable) return [];
  return Object.keys(aspectable)
    .filter((k) => k.startsWith(prefix) && aspectable[k as Aspect])
    .map((k) => k.substring(prefix.length));
}
