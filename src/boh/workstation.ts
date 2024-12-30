import { WorkstationData } from "../data/workstation_data";
import { AspectMap, MatchesRequiredAspects } from "./aspects";
import { GetAvailableMemoriesFromSave, Items } from "./crafting";
import { FindBestByPrinciple, Or0, Principle } from "./principles";
import { Save } from "./save";
import { Skills } from "./skills";
import { Element, Souls } from "./souls";

export interface Workstation {
  id: string;
  label: string;
  location?: string;

  aspects: AspectMap;

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

export function GetAllWorkstations() {
  return WorkstationData as Workstation[];
}

export function GetSlotablesFromSave(save: Save): Slotable[] {
  return [
    ...save.souls,
    ...save.skills,
    ...save.items,
    ...GetAvailableMemoriesFromSave(save),
    // Maybe some other CRAFTABLES?
    // ...save.books, // Not really useful for INPUTS???
  ].filter((s) => !!s); // Sometimes null was getting in here.
}

export function GetAllSlotables(): Slotable[] {
  return [...Skills, ...Items, ...Souls];
}

export function MatchesSlot(
  { required, essential, forbidden }: Slot,
  slotable: AspectMap
): boolean {
  if (forbidden && MatchesRequiredAspects(forbidden, slotable)) return false;
  if (essential && !MatchesRequiredAspects(essential, slotable)) return false;
  return MatchesRequiredAspects(required, slotable);
}

// TODO!!!
// HMMM! for reading we need to like.. pass in the REQUIRED items.
// This could also be useful for recipes that require SPECIFIC inputs, e.g. use the fife, or solomans preparation.
// Actually, only the soul HAS to be populated.
// But complex since things like MEMORY can only exist once.
// TODO: Have consider be first? List multiple desks if they have the same values??
// Also need to have at least 1 soul! but it could be any soul I guess?
export function FindBestWorkstationByPrinciple(
  principle: Principle,
  workstations = GetAllWorkstations(),
  slotables = GetAllSlotables(),
  requiredSlotables?: Slotable[]
) {
  //   const workstationMap = new Map<string, Map<string, Slotable>>();
  let bestWorkstation: Workstation | null = null;
  let bestSum = 0;
  let bestSlotMap = new Map<Slot, Slotable>();
  for (const workstation of workstations) {
    let slots = workstation.slots;
    if (requiredSlotables) {
      const matchingSlotsPerSlotable = requiredSlotables.map((r) =>
        FindMatchingSlots(workstation, r)
      );
    }

    // console.log(`Checking workstation ${workstation.label}`);

    // Map from slot id -> item in the slot.
    const slotmap = FillSlotsByPrinciple(
      principle,
      workstation.slots,
      slotables
    );

    const sum = SumWorkstationSlots(principle, [...slotmap.values()]);
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

export function FillSlotsByPrinciple(
  principle: Principle,
  slots: Slot[],
  slotables: Slotable[]
) {
  const slotmap = new Map<Slot, Slotable>();
  for (const slot of slots) {
    const matching = slotables.filter((s) => MatchesSlot(slot, s));
    const best = FindBestByPrinciple(principle, matching);
    if (best) slotmap.set(slot, best);
  }

  return slotmap;
}

export function FindMatchingSlots(
  workstation: Workstation,
  slotable: Slotable
): Slot[] {
  return workstation.slots.filter((slot) => MatchesSlot(slot, slotable));
}

export function SumWorkstationSlots(
  principle: Principle,
  slotted: Slotable[]
): number {
  let sum = 0;
  for (const s of slotted) sum += Or0(s?.[principle]);
  return sum;
}
