import {
  AddPrinciplesInplace,
  AspectMap,
  MatchesRequiredAspects,
} from "./aspects";
import { Items } from "./items";
import { GetAvailableMemoriesFromSave } from "./memories";
import { FindBestByPrinciple, Or0, Principle } from "./principles";
import { Save } from "./save";
import { Skills } from "./skills";
import { Element, Souls } from "./souls";

export interface Workstation {
  id: string;
  label: string;
  type?: "desk" | "bed";
  location?: string;

  aspects?: AspectMap;

  slots: Slot[];
  hints?: Principle[]; // Not really that useful TBH.
}

export interface Slot {
  id: string;
  label: string;

  // Must match essential if it is there.
  essential?: AspectMap;

  // Must NOT matching if it is there.
  forbidden?: AspectMap;

  // Can match any one of the required
  required: AspectMap;
}

export interface Slotable extends AspectMap {
  id?: string; // Souls don't have id right now..
  element?: Element; // Souls don't have id right now... it's in the save data.
  label: string;
  location?: string;
}

export function GetSlotablesFromSave(
  save: Save,
  renewableOnly = false,
): Slotable[] {
  const items = [
    ...save.souls,
    ...save.skills,
    ...save.items.filter(
      (item) => !renewableOnly || !item.fatigues, //|| IsCraftable(item.id)
    ),
    // Maybe some other CRAFTABLES?
    // ...save.books, // Not really useful for INPUTS???
  ].noNulls(); // Sometimes null was getting in here.

  // Avoid duplicating memories you already have.
  const memories = GetAvailableMemoriesFromSave(save, renewableOnly)
    .noNulls()
    .filter((mem) => !items.some((item) => item?.id == mem?.id));

  return [...items, ...memories].noNulls();
}

export function GetAllSlotables(): Slotable[] {
  return [...Skills, ...Items, ...Souls];
}

export function MatchesSlot(
  { required, essential, forbidden }: Slot,
  slotable: AspectMap,
): boolean {
  if (forbidden && MatchesRequiredAspects(forbidden, slotable)) return false;
  if (essential && !MatchesRequiredAspects(essential, slotable)) return false;
  return MatchesRequiredAspects(required, slotable);
}

export interface BestWorkstation {
  bestWorkstation: Workstation | null;
  bestSum: number;
  bestSlotMap: Map<Slot, Slotable>;
}

// TODO!!!
// This will use DUPLICATES of things that are unique.
// E.G. Can only use a memory ONCE.
// Might only have a single +Phost, but it will use it twice!
// Also this might give you an option that is WAY better than you need.
export function FindBestWorkstationByPrinciple(
  principle: Principle,
  workstations = Workstations,
  slotables = GetAllSlotables(),
): BestWorkstation {
  //   const workstationMap = new Map<string, Map<string, Slotable>>();
  let bestWorkstation: Workstation | null = null;
  let bestSum = 0;
  let bestSlotMap = new Map<Slot, Slotable>();
  for (const workstation of workstations) {
    // Map from slot id -> item in the slot.
    const slotmap = FillSlotsByPrinciple(
      principle,
      workstation.slots,
      slotables,
    );

    const sum = SumWorkstationSlots(principle, [
      ...slotmap.values(),
      workstation as any,
      workstation.aspects as any,
    ]);
    if (sum > bestSum) {
      bestWorkstation = workstation;
      bestSum = sum;
      bestSlotMap = slotmap;
    }
  }

  return {
    bestWorkstation,
    bestSum,
    bestSlotMap,
  };
}

// Dumbly uses an item in the first matching slot only
export function FillSlotsByPrinciple(
  principle: Principle,
  slots: Slot[],
  slotables: Slotable[],
) {
  let bestSum = 0;
  let bestSlotmap = new Map<Slot, Slotable>();
  // Try a few different orders of slots...
  for (let i = 0; i < slots.length; i++) {
    const shuffled = [...slots];
    for (let j = 0; j < i; j++) {
      shuffled.push(shuffled.pop()!);
    }

    const slotmap = FillSlotsByPrincipleOnlyUseOnce(
      principle,
      shuffled,
      slotables,
    );

    const sum = SumWorkstationSlots(principle, slotmap.values().toArray());
    if (sum > bestSum) {
      bestSum = sum;
      bestSlotmap = slotmap;
    }
  }

  return bestSlotmap;
}

// Dumbly uses an item in the first matching slot only
// This is quick though
export function FillSlotsByPrincipleOnlyUseOnce(
  principle: Principle,
  slots: Slot[],
  slotables: Slotable[],
) {
  const slotmap = new Map<Slot, Slotable>();
  // Could simply try this but with every order of the slots?
  // might only be like 5x longer?
  for (const slot of slots) {
    const matching = slotables.filter(
      // Filter out things already assigned in a slot, this uses object reference
      // So if you pass in a slotable twice, it can be used twice.
      (s) => ![...slotmap.values()].includes(s) && MatchesSlot(slot, s),
    );
    // This should... recurse for the other slots?
    const best = FindBestByPrinciple(principle, matching);
    if (best) slotmap.set(slot, best);
  }

  return slotmap;
}

export function FindMatchingSlots(
  workstation: Workstation,
  slotable: Slotable,
): Slot[] {
  return workstation.slots.filter((slot) => MatchesSlot(slot, slotable));
}

export function SumSlotAspects(slotables: Slotable[]): AspectMap {
  const sum = {} as AspectMap;
  for (const slotable of slotables) {
    // SUM principles, take MAX of aspects.
    AddPrinciplesInplace(sum, slotable);
  }
  return sum;
}

export function SumWorkstationSlots(
  principle: Principle,
  slotables: Slotable[],
): number {
  let sum = 0;
  for (const slotable of slotables) sum += Or0(slotable?.[principle]);
  return sum;
}

export function GetWorkstationSlots(workstation: Workstation) {
  const { slots } = workstation;
  const soul = slots.find((s) => s.id == "a")!;
  const skill = slots.find((s) => s.id == "s")!;
  const memory = slots.find((s) => s.id == "m")!;
  const others = slots.filter((s) => s != soul && s != skill && s != memory);
  return { soul, skill, memory, others };
}

export function WorkstationAsSlotable(ws: Workstation): Slotable {
  return {
    // id: ws.id,
    // label: ws.label,
    ...ws, // if it already had aspects?
    ...ws.aspects,
  };
}
export const Consider: Workstation = {
  id: "consider",
  label: "Consider",
  slots: [
    {
      id: "consider",
      label: "Consider",
      required: {
        readable: 1,
        considerable: 1,
        // This being removed was a hack for reading.
        // What we should do is instead make sure it slots the needed item, and matches the requirements of the slots.
        // skill: 1,
        // lesson: 1,
        // cache: 1,
      },
      forbidden: { "record.phonograph": 1, film: 1, fixed: 1 },
    },
    {
      id: "a",
      label: "Soul",
      required: { ability: 1 },
    },
    {
      id: "s",
      label: "Skill",
      required: { skill: 1 },
    },
    {
      id: "m",
      label: "Memory",
      required: { memory: 1 },
    },
  ],
  aspects: {},
};

export const Workstations: Workstation[] = [
  {
    id: "library.altar.ascite",
    label: "Altar: Ascite",
    hints: ["edge", "scale", "winter", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          tool: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          tool: 1,
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.nyctodromy": 1,
    },
  },
  {
    id: "library.altar.atrium",
    label: "Shrine: St Januarius",
    hints: ["rose", "sky", "heart", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          light: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          light: 1,
          memory: 1,
          fuel: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.nyctodromy": 1,
    },
  },
  {
    id: "library.altar.calicite",
    label: "Calicite Altar",
    hints: ["moon", "heart", "grail"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moon: 1,
          heart: 1,
          grail: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moon: 1,
          heart: 1,
          grail: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moon: 1,
          heart: 1,
          grail: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          beverage: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          beverage: 1,
          memory: 1,
          flower: 1,
          woven: 1,
          remains: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.bosk": 1,
    },
  },
  {
    id: "library.altar.catacombs",
    label: "Catacombs Altar",
    hints: ["moon", "scale", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moon: 1,
          scale: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moon: 1,
          scale: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moon: 1,
          scale: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          remains: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          remains: 1,
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
  },
  {
    id: "library.altar.chancel",
    label: "Shrine: the Chancel",
    hints: ["moth", "winter", "edge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          winter: 1,
          edge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          winter: 1,
          edge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          winter: 1,
          edge: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          light: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
          "hidden.mihail.altar": 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          light: 1,
          memory: 1,
          fuel: 1,
          pigment: 1,
          "hidden.mihail.altar": 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.horomachistry": 1,
    },
    xtriggers: {
      upgrading: "library.altar.chancel.mihail",
    },
  },
  {
    id: "library.altar.glorious",
    label: "Shrine: the Madrugad",
    hints: ["sky", "winter", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          light: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          light: 1,
          memory: 1,
          fuel: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.ithastry": 1,
    },
  },
  {
    id: "library.altar.lady",
    label: "Altar of the Knot",
    hints: ["moth", "moon", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          material: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          material: 1,
          memory: 1,
          flower: 1,
          woven: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.bosk": 1,
    },
  },
  {
    id: "library.altar.malachite",
    label: "Altar: Malachite",
    hints: ["moth", "nectar", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          sustenance: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          sustenance: 1,
          memory: 1,
          flower: 1,
          root: 1,
          woven: 1,
          remains: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.preservation": 1,
    },
  },
  {
    id: "library.altar.radiant",
    label: "Shrine: the Watchman",
    hints: ["rose", "sky", "lantern"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          lantern: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          lantern: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          rose: 1,
          sky: 1,
          lantern: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          light: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          light: 1,
          memory: 1,
          gem: 1,
          lens: 1,
          fuel: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.illumination": 1,
    },
  },
  {
    id: "library.altar.solar",
    label: "Solar Altar",
    hints: ["sky", "winter", "lantern"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          light: 1,
          cooperative: 1,
          ability: 1,
          mark: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          light: 1,
          memory: 1,
          gem: 1,
          lens: 1,
          fuel: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
  },
  {
    id: "library.altar.tentreto",
    label: "Altar: St Tentreto",
    hints: ["moon", "moth", "knock", "scale"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moon: 1,
          moth: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moon: 1,
          moth: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moon: 1,
          moth: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "i1",
        label: "Devotion",
        required: {
          memory: 1,
          cooperative: 1,
          ability: 1,
          blank: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Remembrance",
        required: {
          cooperative: 1,
          memory: 1,
          liquid: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.horomachistry": 1,
      "e.nyctodromy": 1,
    },
    xtriggers: {
      upgrading: "library.altar.tentreto.offering",
    },
  },
  {
    id: "library.bed.rest.cell.adept",
    label: "My Bed: Adept Cell",
    hints: ["scale", "lantern", "winter", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.cell.adept",
    },
  },
  {
    id: "library.bed.rest.cell.long",
    label: "My Bed: Long Cell",
    hints: ["scale", "lantern", "edge", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          scale: 1,
          lantern: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.cell.long",
    },
  },
  {
    id: "library.bed.rest.hermit",
    label: "My Bed: Hermit",
    hints: ["scale", "moon", "sky", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          scale: 1,
          moon: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          scale: 1,
          moon: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          scale: 1,
          moon: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.hermit",
    },
  },
  {
    id: "library.bed.rest.infirmary",
    label: "My Bed: Infirmary",
    hints: ["nectar", "edge", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          nectar: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          nectar: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          nectar: 1,
          edge: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.infirmary",
    },
  },
  {
    id: "library.bed.rest.librarian",
    label: "My Bed: Librarian's Quarters",
    hints: ["lantern", "rose", "sky", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          lantern: 1,
          rose: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          lantern: 1,
          rose: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          lantern: 1,
          rose: 1,
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.librarian",
    },
  },
  {
    id: "library.bed.rest.lodge",
    label: "My Bed: Lodge",
    hints: ["scale", "forge", "knock", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          scale: 1,
          forge: 1,
          knock: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          scale: 1,
          forge: 1,
          knock: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          scale: 1,
          forge: 1,
          knock: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.lodge",
    },
  },
  {
    id: "library.bed.rest.motley",
    label: "My Bed: Motley",
    hints: ["forge", "rose", "moth", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          rose: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          rose: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          rose: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.motley",
    },
  },
  {
    id: "library.bed.rest.pale",
    label: "My Bed: Pale",
    hints: ["grail", "sky", "winter", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          grail: 1,
          sky: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          grail: 1,
          sky: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          grail: 1,
          sky: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.pale",
    },
  },
  {
    id: "library.bed.rest.servants1",
    label: "My Bed: Servant's Quarters",
    hints: ["forge", "nectar", "scale", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.servants1",
    },
  },
  {
    id: "library.bed.rest.servants2",
    label: "My Bed: Servant's Quarters",
    hints: ["forge", "nectar", "scale", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.servants2",
    },
  },
  {
    id: "library.bed.rest.servants3",
    label: "My Bed: Servant's Quarters",
    hints: ["forge", "nectar", "scale", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.servants3",
    },
  },
  {
    id: "library.bed.rest.servants4",
    label: "My Bed: Servant's Quarters",
    hints: ["forge", "nectar", "scale", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          nectar: 1,
          scale: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.servants4",
    },
  },
  {
    id: "library.bed.rest.severn",
    label: "My Bed: Severn Chamber",
    hints: ["grail", "moon", "rose", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          grail: 1,
          moon: 1,
          rose: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          grail: 1,
          moon: 1,
          rose: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          grail: 1,
          moon: 1,
          rose: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.severn",
    },
  },
  {
    id: "library.bed.rest.solomon",
    label: "My Bed: Solomon",
    hints: ["rose", "lantern", "winter", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          rose: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          rose: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          rose: 1,
          lantern: 1,
          winter: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.solomon",
    },
  },
  {
    id: "library.bed.rest.violet",
    label: "My Bed: Violet Chamber",
    hints: ["grail", "knock", "moth", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          fatigued: 1,
          malady: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          beverage: 1,
          covenant: 1,
          restorative: 1,
        },
      },
    ],
    aspects: {
      mybed: 1,
    },
    xtriggers: {
      decamping: "library.bed.guest.violet",
    },
  },
  {
    id: "library.cage",
    label: "Cage",
    hints: ["moth", "moon", "knock", "scale"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          moon: 1,
          knock: 1,
          scale: 1,
        },
      },
      {
        id: "i1",
        label: "Restore",
        required: {
          cooperative: 1,
          beverage: 1,
          sustenance: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          cooperative: 1,
          beverage: 1,
          sustenance: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.chair.barber",
    label: "Barber's Chair",
    hints: ["heart", "grail", "moth"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          heart: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          heart: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          heart: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "i1",
        label: "Regret",
        required: {
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Recall",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.preservation": 1,
    },
  },
  {
    id: "library.chrysalis",
    label: "Chrysalis",
    hints: ["nectar", "heart", "scale", "moth"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          nectar: 1,
          heart: 1,
          scale: 1,
          moth: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          nectar: 1,
          heart: 1,
          scale: 1,
          moth: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          nectar: 1,
          heart: 1,
          scale: 1,
          moth: 1,
        },
      },
      {
        id: "i1",
        label: "Dorsal",
        required: {
          liquid: 1,
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Ventral",
        required: {
          liquid: 1,
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.bosk": 1,
    },
    xtriggers: {
      upgrading: "library.chrysalis.wisp",
    },
  },
  {
    id: "library.clock.great",
    label: "Great Clock",
    hints: ["forge", "knock", "sky", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "Action",
        required: {
          ability: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Recollection",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.horomachistry": 1,
    },
  },
  {
    id: "library.condignator",
    label: "Condignator",
    hints: ["edge", "forge", "knock", "lantern"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          forge: 1,
          knock: 1,
          lantern: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          forge: 1,
          knock: 1,
          lantern: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          forge: 1,
          knock: 1,
          lantern: 1,
        },
      },
      {
        id: "i1",
        label: "Subject",
        required: {
          cooperative: 1,
          memory: 1,
          ability: 1,
          tool: 1,
          remains: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Mode",
        required: {
          cooperative: 1,
          memory: 1,
          ability: 1,
          tool: 1,
          remains: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.skolekosophy": 1,
    },
  },
  {
    id: "library.desk.ambrose.consider",
    label: "Desk: Ambrose",
    hints: ["forge", "knock", "lantern", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          lantern: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          lantern: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          knock: 1,
          lantern: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.eva.consider",
    label: "Desk: Eva",
    hints: ["edge", "grail", "moon", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          grail: 1,
          moon: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          grail: 1,
          moon: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          grail: 1,
          moon: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.governor.consider",
    label: "Desk: Governor",
    hints: ["lantern", "edge", "moth", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          lantern: 1,
          edge: 1,
          moth: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          lantern: 1,
          edge: 1,
          moth: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          lantern: 1,
          edge: 1,
          moth: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.natan.consider",
    label: "Desk: Natan",
    hints: ["heart", "knock", "rose", "moth"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          heart: 1,
          knock: 1,
          rose: 1,
          moth: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          heart: 1,
          knock: 1,
          rose: 1,
          moth: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          heart: 1,
          knock: 1,
          rose: 1,
          moth: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.nonna.consider",
    label: "Desk: Nonna",
    hints: ["lantern", "grail", "nectar", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          lantern: 1,
          grail: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          lantern: 1,
          grail: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          lantern: 1,
          grail: 1,
          nectar: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.pale.consider",
    label: "Desk: Pale",
    hints: ["lantern", "scale", "sky", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          lantern: 1,
          scale: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          lantern: 1,
          scale: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          lantern: 1,
          scale: 1,
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.reading.consider",
    label: "Desk: Reading Room",
    hints: ["heart", "lantern", "moon", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          heart: 1,
          lantern: 1,
          moon: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          heart: 1,
          lantern: 1,
          moon: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          heart: 1,
          lantern: 1,
          moon: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.desk.vagabond.consider",
    label: "Desk: Vagabond",
    hints: ["edge", "knock", "rose", "scale"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          knock: 1,
          rose: 1,
          scale: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          knock: 1,
          rose: 1,
          scale: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          knock: 1,
          rose: 1,
          scale: 1,
        },
      },
      {
        id: "i1",
        label: "Papers",
        required: {
          readable: 1,
          blank: 1,
        },
        forbidden: {
          "record.phonograph": 1,
          film: 1,
        },
      },
      {
        id: "i2",
        label: "With",
        required: {
          ink: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.dispensary",
    label: "Dispensary",
    hints: ["nectar", "knock", "moth", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          nectar: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          nectar: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          nectar: 1,
          knock: 1,
          moth: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Matter",
        required: {
          flower: 1,
          remains: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Substance",
        required: {
          liquid: 1,
          remains: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.duelhall",
    label: "Practice Equipment",
    hints: ["edge", "scale", "lantern", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          lantern: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          lantern: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          lantern: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Action",
        required: {
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Recollection",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.illumination": 1,
    },
  },
  {
    id: "library.foundry",
    label: "Foundry",
    hints: ["knock", "edge", "scale", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          knock: 1,
          edge: 1,
          scale: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          knock: 1,
          edge: 1,
          scale: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          knock: 1,
          edge: 1,
          scale: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Metal",
        required: {
          metal: 1,
          stone: 1,
          glass: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Fuel",
        required: {
          liquid: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.glassware.alchemist",
    label: "Alchemist's Glassware",
    hints: ["winter", "lantern", "grail", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          winter: 1,
          lantern: 1,
          grail: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          winter: 1,
          lantern: 1,
          grail: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          winter: 1,
          lantern: 1,
          grail: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Substance",
        required: {
          material: 1,
          root: 1,
          flower: 1,
          remains: 1,
          leaf: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Solution",
        required: {
          liquid: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.instrument.bells",
    label: "Instrument: Bells",
    hints: ["sky", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.ithastry": 1,
      instrument: 1,
    },
  },
  {
    id: "library.instrument.doublebass",
    label: "Instrument: Quivering Double Bass",
    hints: ["sky", "grail"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          grail: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          grail: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          grail: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.birdsong": 1,
      instrument: 1,
    },
  },
  {
    id: "library.instrument.drum",
    label: "Instrument: Hallowed Drum",
    hints: ["sky", "heart"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          heart: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.preservation": 1,
      instrument: 1,
    },
  },
  {
    id: "library.instrument.harp",
    label: "Instrument: Sunset Harp",
    hints: ["sky", "moon"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          moon: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          moon: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          moon: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.birdsong": 1,
      instrument: 1,
    },
  },
  {
    id: "library.instrument.harp2",
    label: "Instrument: Hunter's Harp",
    hints: ["sky", "scale"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          scale: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          scale: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          scale: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.nyctodromy": 1,
      instrument: 1,
    },
  },
  {
    id: "library.instrument.organ",
    label: "Instrument: Organ",
    hints: ["sky", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      instrument: 1,
    },
  },
  {
    id: "library.instrument.piano.grand",
    label: "Instrument: Grand Piano",
    hints: ["sky", "rose"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          rose: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          rose: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          rose: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      instrument: 1,
    },
  },
  {
    id: "library.instrument.piano.servants",
    label: "Instrument: Piano",
    hints: ["sky", "moth"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          moth: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          moth: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          moth: 1,
        },
      },
      {
        id: "i1",
        label: "Application",
        required: {
          ability: 1,
          omen: 1,
          sound: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Inspiration",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      instrument: 1,
    },
  },
  {
    id: "library.loom",
    label: "Loom",
    hints: ["heart", "moth", "nectar", "rose"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          heart: 1,
          moth: 1,
          nectar: 1,
          rose: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          heart: 1,
          moth: 1,
          nectar: 1,
          rose: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          heart: 1,
          moth: 1,
          nectar: 1,
          rose: 1,
        },
      },
      {
        id: "i1",
        label: "Warp",
        required: {
          fabric: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Weft",
        required: {
          fabric: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.mirrors",
    label: "Mirrors",
    hints: ["grail", "knock", "winter", "lantern"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          grail: 1,
          knock: 1,
          winter: 1,
          lantern: 1,
        },
      },
      {
        id: "i1",
        label: "Sight",
        required: {
          ability: 1,
          light: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Reflection",
        required: {
          memory: 1,
          light: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.nyctodromy": 1,
    },
  },
  {
    id: "library.nocturnary",
    label: "Nocturnary",
    hints: ["winter", "nectar", "grail", "moon"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          winter: 1,
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          winter: 1,
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          winter: 1,
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "i1",
        label: "Substance",
        required: {
          ability: 1,
          wood: 1,
          omen: 1,
          pigment: 1,
          device: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "Shadow",
        required: {
          memory: 1,
          remains: 1,
          omen: 1,
          liquid: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.skolekosophy": 1,
    },
  },
  {
    id: "library.oubliette",
    label: "Oubliette Containment",
    hints: ["winter", "edge", "lantern", "forge"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          lantern: 1,
          forge: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          lantern: 1,
          forge: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          lantern: 1,
          forge: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          remains: 1,
          gem: 1,
          metal: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          remains: 1,
          gem: 1,
          metal: 1,
          fuel: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.ithastry": 1,
    },
  },
  {
    id: "library.practic.dummy",
    label: "Practic Garden Dummy",
    hints: ["edge", "scale", "heart", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          heart: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          heart: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          edge: 1,
          scale: 1,
          heart: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.illumination": 1,
    },
  },
  {
    id: "library.phonograph.consider",
    label: "Governor's Phonograph",
    hints: ["rose", "scale", "heart", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          rose: 1,
          scale: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          rose: 1,
          scale: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          rose: 1,
          scale: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "Record",
        required: {
          "record.phonograph": 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.phonograph.severn.consider",
    label: "Thirza's Phonograph",
    hints: ["knock", "moon", "heart", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          knock: 1,
          moon: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          knock: 1,
          moon: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          knock: 1,
          moon: 1,
          heart: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "Record",
        required: {
          "record.phonograph": 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.projector.consider",
    label: "Projector",
    hints: ["lantern", "forge", "grail", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          lantern: 1,
          forge: 1,
          grail: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          lantern: 1,
          forge: 1,
          grail: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          lantern: 1,
          forge: 1,
          grail: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "Film",
        required: {
          film: 1,
        },
        forbidden: {},
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.prospect.loggia",
    label: "Loggia Prospect",
    hints: ["moon", "rose"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moon: 1,
          rose: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moon: 1,
          rose: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moon: 1,
          rose: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          blank: 1,
          cooperative: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
  },
  {
    id: "library.prospect.spire",
    label: "Spire Prospect",
    hints: ["moth", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          blank: 1,
          cooperative: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
  },
  {
    id: "library.prospect.towertop",
    label: "Tower-Top Prospect",
    hints: ["sky", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          sky: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          blank: 1,
          cooperative: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
  },
  {
    id: "library.rowenarium",
    label: "Rowenarium",
    hints: ["rose", "winter", "grail", "moth"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          rose: 1,
          winter: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          rose: 1,
          winter: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          rose: 1,
          winter: 1,
          grail: 1,
          moth: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          remains: 1,
          cooperative: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
          key: 1,
          remains: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.skolekosophy": 1,
    },
    xtriggers: {
      "upgrading.out": "library.rowenarium.spencer.out",
      "upgrading.down": "library.rowenarium.spencer.down",
    },
  },
  {
    id: "library.sarcophagus.columbic",
    label: "Columbic Sarcophagus",
    hints: ["moth", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          moth: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          moth: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          moth: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          remains: 1,
          omen: 1,
          "hidden.mihail.sarcophagus": 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
          remains: 1,
          "hidden.mihail.sarcophagus": 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.hushery": 1,
    },
    xtriggers: {
      upgrading: "library.sarcophagus.columbic.mihail",
    },
  },
  {
    id: "library.spring",
    label: "Sacred Spring",
    hints: ["nectar", "grail", "moon"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          nectar: 1,
          grail: 1,
          moon: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
          remains: 1,
          omen: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
          pigment: 1,
          remains: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.table.necropsy",
    label: "Necropsy Table",
    hints: ["scale", "heart", "knock", "winter"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          scale: 1,
          heart: 1,
          knock: 1,
          winter: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          scale: 1,
          heart: 1,
          knock: 1,
          winter: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          scale: 1,
          heart: 1,
          knock: 1,
          winter: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          material: 1,
          remains: 1,
          tool: 1,
          carcass: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          material: 1,
          remains: 1,
          tool: 1,
          carcass: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.telescope",
    label: "Telescope",
    hints: ["forge", "moon", "rose", "sky"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          moon: 1,
          rose: 1,
          sky: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          moon: 1,
          rose: 1,
          sky: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          moon: 1,
          rose: 1,
          sky: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          lens: 1,
          tool: 1,
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          lens: 1,
          memory: 1,
          tool: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.horomachistry": 1,
    },
  },
  {
    id: "library.workbench.gallery",
    label: "Windlit Workbench",
    hints: ["forge", "lantern", "heart", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          wood: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          woven: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          wood: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.workbench.governor",
    label: "Sculptor's Bench",
    hints: ["forge", "lantern", "scale", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          scale: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          scale: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          lantern: 1,
          scale: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          stone: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          woven: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          stone: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.workbench.gullscry",
    label: "Gullscry Workbench",
    hints: ["forge", "sky", "winter", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          winter: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          wood: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          woven: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          wood: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.workbench.hermit",
    label: "Hermit's Workbench",
    hints: ["forge", "sky", "scale", "moon"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          forge: 1,
          sky: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          stone: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          woven: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          stone: 1,
          remains: 1,
          tool: 1,
          wooden: 1,
          ductile: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {},
  },
  {
    id: "library.yard.exercise",
    label: "Exercise Yard",
    hints: ["winter", "edge", "heart", "knock"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          winter: 1,
          edge: 1,
          heart: 1,
          knock: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.ithastry": 1,
    },
  },
  {
    id: "library.corals.deeplight",
    label: "Deeplight Corals",
    hints: ["nectar", "rose", "scale", "moon"],
    slots: [
      {
        id: "a",
        label: "Soul",
        essential: {
          ability: 1,
        },
        required: {
          nectar: 1,
          rose: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "s",
        label: "Skill",
        essential: {
          skill: 1,
        },
        required: {
          nectar: 1,
          rose: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "m",
        label: "Memory",
        essential: {
          memory: 1,
        },
        required: {
          nectar: 1,
          rose: 1,
          scale: 1,
          moon: 1,
        },
      },
      {
        id: "i1",
        label: "+",
        required: {
          ability: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
      {
        id: "i2",
        label: "+",
        required: {
          memory: 1,
        },
        forbidden: {
          fatigued: 1,
        },
      },
    ],
    aspects: {
      "e.bosk": 1,
    },
  },
] as any as Workstation[];
