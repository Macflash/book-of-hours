import { Or0, Principle } from "./principles";

export type Aspect =
  | Principle
  | "candles"
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
  | "leaf"
  | "sound"
  | "ink"
  | "liquid"
  | "beverage"
  | "ability" // souls
  | "skill"
  | "device"
  | "memory"
  | "tool"
  | "record.phonograph"
  | "film"
  | "fatigued"
  | "readable"
  | "blank"
  // More stuff
  | "thing"
  | "remains"
  | "woven"
  | "cooperative"
  | "mark"
  | "omen";

export type AspectMap = Partial<{
  [key in Aspect]: number;
}>;

export function AddAspects(a: AspectMap, b: AspectMap): AspectMap {
  const result: AspectMap = {};
  for (const key in a) {
    const aspect = key as Aspect;
    result[aspect] = a[aspect];
  }
  for (const key in b) {
    const aspect = key as Aspect;
    result[aspect] = Or0(result[aspect]) + Or0(b[aspect]);
  }
  return result;
}

export function AddAspectsInplace(a: AspectMap, b: AspectMap) {
  for (const key in b) {
    if (key.toLowerCase() == "id") continue;
    if (key.toLowerCase() == "label") continue;
    const aspect = key as Aspect;
    a[aspect] = Or0(a[aspect]) + Or0(b[aspect]);
  }
}
