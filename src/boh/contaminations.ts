import { Principle, PrincipleMap } from "./principles";

export interface Contamination extends PrincipleMap {
  id: string;
  label: string;
  curedWith: Principle;
  curedBy: string;
}
export const Contaminations: Contamination[] = [
  // theoplasma
  {
    id: "contamination.actinic",
    curedBy: "effective.contamination.theoplasma",
    label: "Actinic Theoplasma",
    forge: 7,
    curedWith: "forge",
  },
  {
    id: "contamination.chionic",
    curedBy: "effective.contamination.theoplasma",
    label: "Chionic Theoplasma",
    heart: 7,
    curedWith: "heart",
  },
  // infestation
  {
    id: "contamination.bloodlines",
    curedBy: "effective.contamination.infestation",
    label: "Bloodlines",
    moth: 7,
    curedWith: "moth",
  },
  {
    id: "contamination.witchworms",
    curedBy: "effective.contamination.infestation",
    label: "Witchworms",
    winter: 7,
    curedWith: "winter",
  },
  // curse
  {
    id: "contamination.curse.fifth.eye",
    curedBy: "effective.contamination.curse",
    label: "Fifth Eye Curse",
    heart: 7,
    curedWith: "heart",
  },
  {
    id: "contamination.sthenic.taint",
    curedBy: "effective.contamination.curse",
    label: "Sthenic Taint",
    knock: 7,
    curedWith: "knock",
  },
  // corruption
  {
    id: "contamination.keeperskin",
    curedBy: "effective.contamination.corruption",
    label: "Keeperskin",
    nectar: 7,
    curedWith: "nectar",
  },
  {
    id: "contamination.winkwell",
    curedBy: "effective.contamination.corruption",
    label: "Winkwell",
    moon: 7,
    curedWith: "moon",
  },
];
