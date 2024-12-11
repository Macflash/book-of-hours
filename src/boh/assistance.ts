import { PrincipleMap } from "./principles";

export interface Assistant extends PrincipleMap {
  id: string;
  label: string;
  fee: number;

  candles?: boolean;
  wood?: boolean;
  fabric?: boolean;
  metal?: boolean;
  fuel?: boolean;
  omen?: boolean;
  pigment?: boolean;
  flower?: boolean;
}

export const Assistants: ReadonlyArray<Readonly<Assistant>> = [
  {
    id: "assistance.fisherman",
    label: "Fisherman's Assistance",
    fee: 12,
    moon: 2,
    sky: 1,
  },
  {
    id: "assistance.orchardkeeper",
    label: "Orchard-Keeper's Assistance",
    fee: 12,
    nectar: 2,
    heart: 1,
  },
  {
    id: "assistance.barber",
    label: "Barber's Assistance",
    fee: 12,
    moth: 2,
    rose: 1,
  },
  {
    id: "assistance.miner",
    label: "Miner's Assistance",
    fee: 12,
    scale: 2,
    forge: 1,
    moon: 1,
  },
  {
    id: "assistance.rector",
    label: "Rector's Assistance",
    fee: 12,
    lantern: 2,
    knock: 1,
    candles: true,
  },
  {
    id: "assistance.coffinmaker",
    label: "Coffinmaker's Assistance",
    fee: 12,
    winter: 2,
    sky: 1,
    wood: true,
  },
  {
    id: "assistance.fisherman",
    label: "Fisherman's Assistance",
    fee: 12,
    moon: 2,
    sky: 1,
  },
  {
    id: "assistance.midwife",
    label: "Midwife's Assistance",
    fee: 12,
    grail: 2,
    heart: 1,
    fabric: true,
  },
  {
    id: "assistance.blacksmith",
    label: "Blacksmith's Assistance",
    fee: 12,
    forge: 2,
    edge: 2,
    metal: true,
  },
  {
    id: "assistance.engineer",
    label: "Consulting Engineer's Assistance",
    forge: 4,
    sky: 4,
    lantern: 4,
    fee: 24,
    fuel: true,
  },
  {
    id: "assistance.fugitive",
    label: "Fugitive's Assistance",
    scale: 4,
    edge: 4,
    heart: 4,
    fee: 24,
  },
  {
    id: "assistance.musician",
    label: "Travelling Musician's Assistance",
    sky: 4,
    rose: 4,
    nectar: 4,
    fee: 24,
  },
  {
    id: "assistance.nun",
    label: "Nun's Assistance",
    knock: 4,
    moon: 4,
    grail: 4,
    fee: 24,
    omen: true,
  },
  {
    id: "assistance.painter",
    label: "Surrealist Painter's Assistance",
    grail: 4,
    moth: 4,
    rose: 4,
    fee: 24,
    pigment: true,
  },
  {
    id: "assistance.poet",
    label: "Elegiac Poet's Assistance",
    winter: 4,
    moth: 4,
    sky: 4,
    fee: 24,
    flower: true,
  },
];
