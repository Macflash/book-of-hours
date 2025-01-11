import { PrincipleMap, Principles } from "./principles";

export type Element =
  | "Chor"
  | "Ereb"
  | "Fet"
  | "Health"
  | "Mettle"
  | "Phost"
  | "Shapt"
  | "Trist"
  | "Wist";

export const Elements: ReadonlyArray<Element> = [
  "Chor",
  "Ereb",
  "Fet",
  "Health",
  "Mettle",
  "Phost",
  "Shapt",
  "Trist",
  "Wist",
];

export function GetSoulById(id: string): Soul | undefined {
  id = id.replace("z", "x");
  const soul = Souls.find((s) => s.id == id);
  return soul ? { ...soul } : undefined;
}

export function GetElementFromId(id: string): Element {
  return GetSoulById(id)?.element!;
}

export function GetSoulByElement(element: Element): Readonly<Soul> {
  return Souls.find((s) => s.element == element)!;
}

export interface Soul extends PrincipleMap {
  id: string;
  element: Element;
  color: string;
  level: number;
  label: string;
  ability: 1;
}

export type ReadonlySoul = Readonly<Soul>;

export function SoulName(soul: ReadonlySoul): string {
  let { element } = soul;
  for (let i = 1; i < soul.level; i++) {
    element = "+" + element;
  }

  return element;
}

export function EvolveSoul(soul: ReadonlySoul, n = 1): ReadonlySoul {
  if (n <= 1) return soul;
  const evolved: Soul = { ...soul };
  evolved.level++;
  evolved.label = "+" + evolved.label;
  for (const principle of Principles) {
    if (evolved[principle] && (principle !== "scale" || evolved.level > 2)) {
      evolved[principle] += 1;
    }
  }

  if (n > 1) return EvolveSoul(evolved, n - 1);

  return evolved;
}

export const Chor: ReadonlySoul = {
  id: "xcho",
  element: "Chor",
  label: "Chor",
  color: "#EC69B2",
  heart: 2,
  grail: 1,
  level: 1,
  ability: 1,
};

export const Ereb: ReadonlySoul = {
  id: "xere",
  element: "Ereb",
  label: "Ereb",
  color: "#7A66CC",
  grail: 2,
  edge: 1,
  level: 1,
  ability: 1,
};

export const Fet: ReadonlySoul = {
  id: "xfet",
  element: "Fet",
  label: "Fet",
  color: "#5D7ED0",
  rose: 2,
  moth: 1,
  level: 1,
  ability: 1,
};

export const Health: ReadonlySoul = {
  id: "xhea",
  element: "Health",
  label: "Health",
  color: "#FF4552",
  heart: 1,
  nectar: 1,
  scale: 1,
  level: 1,
  ability: 1,
};

export const Mettle: ReadonlySoul = {
  id: "xmet",
  element: "Mettle",
  label: "Mettle",
  color: "#F7902C",
  forge: 2,
  edge: 1,
  level: 1,
  ability: 1,
};

export const Phost: ReadonlySoul = {
  id: "xpho",
  element: "Phost",
  label: "Phost",
  color: "#FFDB47",
  lantern: 2,
  sky: 1,
  level: 1,
  ability: 1,
};

export const Shapt: ReadonlySoul = {
  id: "xsha",
  element: "Shapt",
  label: "Shapt",
  color: "#B7226C",
  knock: 2,
  forge: 1,
  level: 1,
  ability: 1,
};

export const Trist: ReadonlySoul = {
  id: "xtri",
  element: "Trist",
  label: "Trist",
  color: "#7BA2BD",
  moth: 2,
  moon: 1,
  level: 1,
  ability: 1,
};

export const Wist: ReadonlySoul = {
  id: "xwis",
  element: "Wist",
  label: "Wist",
  color: "#A75BD3",
  winter: 2,
  lantern: 1,
  level: 1,
  ability: 1,
};

export const Souls = [
  Chor,
  Ereb,
  Fet,
  Health,
  Mettle,
  Phost,
  Shapt,
  Trist,
  Wist,
];

// TODO: Tests.
// console.log("+Chor", EvolveSoul(Chor));
// console.log("+Health", EvolveSoul(Health));
// console.log("++Health", EvolveSoul(Health, 2));

// console.log("Best edge", FindBestByPrinciple("edge", Souls));
