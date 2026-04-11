import { PrincipleMap } from "./principles";
import { Season } from "./seasons";
import { Slot } from "./workstation";

export interface Assistant extends PrincipleMap {
  id: string;
  label: string;
  fee: number;

  season?: Season;
  unusual?: boolean;

  // This isn't exactly right but, it works well!
  slots: Slot[];
}

// All assistants can use these!
const DefaultAssistanceSlots: Slot[] = [
  {
    id: "soul",
    label: "Soul",
    required: { ability: 1 },
  },
  {
    id: "memory",
    label: "Memory",
    required: { memory: 1 },
  },
  {
    id: "tool",
    label: "Tool",
    required: { tool: 1 },
  },
  {
    id: "sustenance",
    label: "Sustenance",
    required: { sustenance: 1 },
  },
  {
    id: "beverage",
    label: "Beverage",
    required: { beverage: 1 },
  },
];

function withSlot(customSlot?: Slot): Slot[] {
  if (customSlot) return [...DefaultAssistanceSlots, customSlot];
  return DefaultAssistanceSlots;
}

export const Assistants: ReadonlyArray<Readonly<Assistant>> = [
  {
    id: "assistance.fisherman",
    label: "Fisherman",
    fee: 12,
    moon: 2,
    sky: 1,
    season: "winter",
    slots: withSlot(),
  },
  {
    id: "assistance.orchardkeeper",
    label: "Orchard-Keeper",
    fee: 12,
    nectar: 2,
    heart: 1,
    season: "autumn",
    slots: withSlot(),
  },
  {
    id: "assistance.barber",
    label: "Barber",
    fee: 12,
    moth: 2,
    rose: 1,
    season: "summer",
    slots: withSlot(),
  },
  {
    id: "assistance.miner",
    label: "Miner",
    fee: 12,
    scale: 2,
    forge: 1,
    moon: 1,
    season: "spring",
    slots: withSlot(),
  },
  {
    id: "assistance.rector",
    label: "Rector",
    fee: 12,
    lantern: 2,
    knock: 1,
    slots: withSlot({ id: "c", label: "Candles", required: { candle: 1 } }),
  },
  {
    id: "assistance.coffinmaker",
    label: "Coffinmaker",
    fee: 12,
    winter: 2,
    sky: 1,
    slots: withSlot({ id: "w", label: "Wood", required: { wood: 1 } }),
  },
  {
    id: "assistance.midwife",
    label: "Midwife",
    fee: 12,
    grail: 2,
    heart: 1,
    slots: withSlot({ id: "f", label: "Fabric", required: { fabric: 1 } }),
  },
  {
    id: "assistance.blacksmith",
    label: "Blacksmith",
    fee: 12,
    forge: 2,
    edge: 2,
    slots: withSlot({ id: "metal", label: "Metal", required: { metal: 1 } }),
  },
  {
    id: "assistance.engineer",
    label: "Consulting Engineer",
    forge: 4,
    sky: 4,
    lantern: 4,
    fee: 24,
    unusual: true,
    slots: withSlot({ id: "fuel", label: "Fuel", required: { fuel: 1 } }),
  },
  {
    id: "assistance.fugitive",
    label: "Fugitive",
    scale: 4,
    edge: 4,
    heart: 4,
    fee: 24,
    unusual: true,
    slots: withSlot(),
  },
  {
    id: "assistance.musician",
    label: "Travelling Musician",
    sky: 4,
    rose: 4,
    nectar: 4,
    fee: 24,
    unusual: true,
    slots: withSlot(),
  },
  {
    id: "assistance.nun",
    label: "Nun",
    knock: 4,
    moon: 4,
    grail: 4,
    fee: 24,
    unusual: true,
    slots: withSlot({ id: "o", label: "Omen", required: { omen: 1 } }),
  },
  {
    id: "assistance.painter",
    label: "Surrealist Painter",
    grail: 4,
    moth: 4,
    rose: 4,
    fee: 24,
    unusual: true,
    slots: withSlot({ id: "p", label: "Pigment", required: { pigment: 1 } }),
  },
  {
    id: "assistance.poet",
    label: "Elegiac Poet",
    winter: 4,
    moth: 4,
    sky: 4,
    fee: 24,
    unusual: true,
    slots: withSlot({ id: "flower", label: "Flower", required: { flower: 1 } }),
  },
];

export function GetAssistants(
  season?: Season,
  includeUnusual = true,
): Assistant[] {
  return Assistants.filter((a) => {
    if (season && a.season && a.season !== season) return false;
    if (!includeUnusual && a.unusual) return false;
    return true;
  });
}
