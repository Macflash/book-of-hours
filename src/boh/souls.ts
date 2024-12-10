import { FindBestByPrinciple, PrincipleMap, Principles } from "./principles";

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

export interface Soul extends PrincipleMap {
  element: Element;
  plus?: number;
  color: string;
}

export type ReadonlySoul = Readonly<Soul>;

export function SoulName(soul: ReadonlySoul): string {
  let { element } = soul;
  for (let i = 0; i < (soul.plus || 0); i++) {
    element = "+" + element;
  }

  return element;
}

export function EvolveSoul(soul: ReadonlySoul, n = 1): ReadonlySoul {
  if (n <= 0) return soul;
  const evolved: Soul = { ...soul };
  evolved.plus = (soul.plus || 0) + 1;
  for (const principle of Principles) {
    if (evolved[principle] && (principle !== "scale" || evolved.plus > 1)) {
      evolved[principle] += 1;
    }
  }

  if (n > 1) return EvolveSoul(evolved, n - 1);

  return evolved;
}

export const Chor: ReadonlySoul = {
  element: "Chor",
  color: "#EC69B2",
  heart: 2,
  grail: 1,
};

export const Ereb: ReadonlySoul = {
  element: "Ereb",
  color: "#7A66CC",
  grail: 2,
  edge: 1,
};

export const Fet: ReadonlySoul = {
  element: "Fet",
  color: "#5D7ED0",
  rose: 2,
  moth: 1,
};

export const Health: ReadonlySoul = {
  element: "Health",
  color: "#FF4552",
  heart: 1,
  nectar: 1,
  scale: 1,
};

export const Mettle: ReadonlySoul = {
  element: "Mettle",
  color: "#F7902C",
  forge: 2,
  edge: 1,
};

export const Phost: ReadonlySoul = {
  element: "Phost",
  color: "#FFDB47",
  lantern: 2,
  sky: 1,
};

export const Shapt: ReadonlySoul = {
  element: "Shapt",
  color: "#B7226C",
  knock: 2,
  forge: 1,
};

export const Trist: ReadonlySoul = {
  element: "Trist",
  color: "#7BA2BD",
  moth: 2,
  moon: 1,
};

export const Wist: ReadonlySoul = {
  element: "Wist",
  color: "#A75BD3",
  winter: 2,
  lantern: 1,
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
console.log("+Chor", EvolveSoul(Chor));
console.log("+Health", EvolveSoul(Health));
console.log("++Health", EvolveSoul(Health, 2));

console.log("Best edge", FindBestByPrinciple("edge", Souls));
