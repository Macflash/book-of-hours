import { WorkstationData } from "../data/workstation_data";
import {
  AddAspects,
  AddAspectsInplace,
  AspectMap,
  MatchesRequiredAspects,
} from "./aspects";
import { Items } from "./items";
import { GetAvailableMemoriesFromSave } from "./memories";
import { FindBestByPrinciple, Or0, Principle } from "./principles";
import { IsCraftable } from "./recipes";
import { Save } from "./save";
import { Skills } from "./skills";
import { Element, Souls } from "./souls";

export interface Workstation {
  id: string;
  label: string;
  type: "desk" | "bed" | "other";
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
  const workstations = WorkstationData.map((ws) => ({
    ...ws,
    type: ws.id.includes("library.bed")
      ? "bed"
      : ws.id.includes("library.desk")
      ? "desk"
      : "other",
  })) as Workstation[];

  return workstations;
}

export const Workstations = GetAllWorkstations();

export function GetSlotablesFromSave(
  save: Save,
  renewableOnly = false
): Slotable[] {
  const items = [
    ...save.souls,
    ...save.skills,
    ...save.items.filter(
      (item) => !renewableOnly || !item.fatigues //|| IsCraftable(item.id)
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
  slotable: AspectMap
): boolean {
  if (forbidden && MatchesRequiredAspects(forbidden, slotable)) return false;
  if (essential && !MatchesRequiredAspects(essential, slotable)) return false;
  return MatchesRequiredAspects(required, slotable);
}

// TODO!!!
// This will use DUPLICATES of things that are unique.
// E.G. Can only use a memory ONCE.
// Might only have a single +Phost, but it will use it twice!
export function FindBestWorkstationByPrinciple(
  principle: Principle,
  workstations = GetAllWorkstations(),
  slotables = GetAllSlotables(),
  requiredSlotables: Slotable[] = []
) {
  //   const workstationMap = new Map<string, Map<string, Slotable>>();
  let bestWorkstation: Workstation | null = null;
  let bestSum = 0;
  let bestSlotMap = new Map<Slot, Slotable>();
  for (const workstation of workstations) {
    // const requiredSlotablesAndSlots = requiredSlotables.map((required) => ({
    //   required,
    //   slots: FindMatchingSlots(workstation, required),
    // }));

    // We want to generate all COMBINATIONS of the matching slots.

    // console.log(`Checking workstation ${workstation.label}`);

    // Map from slot id -> item in the slot.
    const slotmap = FillSlotsByPrinciple(
      principle,
      workstation.slots,
      slotables
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
  slotables: Slotable[]
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
      slotables
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
  slotables: Slotable[]
) {
  const slotmap = new Map<Slot, Slotable>();
  // Could simply try this but with every order of the slots?
  // might only be like 5x longer?
  for (const slot of slots) {
    const matching = slotables.filter(
      // Filter out things already assigned in a slot, this uses object reference
      // So if you pass in a slotable twice, it can be used twice.
      (s) => ![...slotmap.values()].includes(s) && MatchesSlot(slot, s)
    );
    // This should... recurse for the other slots?
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

export function SumSlotAspects(slotables: Slotable[]): AspectMap {
  const sum = {} as AspectMap;
  for (const slotable of slotables) AddAspectsInplace(sum, slotable);
  return sum;
}

export function SumWorkstationSlots(
  principle: Principle,
  slotables: Slotable[]
): number {
  let sum = 0;
  for (const slotable of slotables) sum += Or0(slotable?.[principle]);
  return sum;
}
