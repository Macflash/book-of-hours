import { PrincipleMap, Principles } from "./principles";
import { GetRoomById, Room } from "./rooms";
import { EvolveSkill, GetSkillById, Skill } from "./skills";
import {
  Soul,
  ReadonlySoul,
  Health,
  Wist,
  EvolveSoul,
  Chor,
  Ereb,
} from "./souls";
import * as Souls from "./souls";

export interface Save {
  souls: Soul[];
  skills: Map<string, Skill>;
  rooms: Room[];
}

interface Mutations extends PrincipleMap {
  skill?: number;
}

interface SaveJson {
  RootPopulationCommand: {
    Spheres: Sphere[];
  };
}

interface Payload {
  $type: string;
  Id: string;
  EntityId?: string;
  Quantity: number;
  Mutations: Mutations;
  Dominions?: Dominion[];
  IsSealed?: boolean;
  IsShrouded?: boolean;
  HasPreviouslyUnshrouded?: boolean;
}

interface Dominion {
  Spheres: Sphere[];
}

interface Token {
  Payload: Payload;
}

interface Sphere {
  Tokens: Token[];
}

export function ParseSave(saveData: SaveJson) {
  const spheres = saveData.RootPopulationCommand.Spheres;
  const save: Save = {
    souls: [],
    skills: new Map(),
    rooms: [],
  };

  function parseSphere(sphere: Sphere) {
    for (const token of sphere.Tokens) {
      if (token.Payload) parsePayload(token.Payload);
    }
  }

  function parseDominions(doms: Dominion[]) {
    for (const dom of doms) {
      for (const sphere of dom.Spheres) {
        parseSphere(sphere);
      }
    }
  }

  function parsePayload(payload: Payload) {
    save.souls.push(...ParseSoul(payload));

    const skill = ParseSkill(payload);
    if (skill) {
      const existing = save.skills.get(skill.id);
      if (!existing) {
        save.skills.set(skill.id, skill);
      } else if (skill.level > existing.level) {
        save.skills.set(skill.id, skill);
      }
    }

    const room = ParseRoom(payload);
    if (room) save.rooms.push(room);

    if (payload.Dominions) parseDominions(payload.Dominions);
  }

  for (const sphere of spheres) {
    parseSphere(sphere);
  }

  return save;
}

const PATH_SOUL = "~/hand.abilities";

function ParseSkill({ EntityId, Mutations }: Payload): Readonly<Skill> | null {
  if (!EntityId) return null;
  if (EntityId?.indexOf("s.") == 0) {
    const skill = GetSkillById(EntityId);
    if (!skill) return null;
    return EvolveSkill(skill, (Mutations.skill || 0) + 1);
  }

  return null;
}

function ParseSoul({ EntityId, Quantity }: Payload): ReadonlySoul[] {
  let soul: ReadonlySoul | null = null;
  switch (EntityId) {
    // Chor
    case "xchor":
    case "zchor":
      soul = EvolveSoul(Chor, 1);
      break;
    case "xchor2":
    case "zchor2":
      soul = EvolveSoul(Chor, 2);
      break;
    case "xchor3":
    case "zchor3":
      soul = EvolveSoul(Chor, 3);
      break;
    case "xchor4":
    case "zchor4":
      soul = EvolveSoul(Chor, 4);
      break;

    // Ereb
    case "xere":
    case "zere":
      soul = EvolveSoul(Ereb, 1);
      break;
    case "xere2":
    case "zere2":
      soul = EvolveSoul(Ereb, 2);
      break;
    case "xere3":
    case "zere3":
      soul = EvolveSoul(Ereb, 3);
      break;
    case "xere4":
    case "zere4":
      soul = EvolveSoul(Ereb, 4);
      break;
    // Fet
    case "xfet":
    case "zfet":
      soul = EvolveSoul(Souls.Fet, 1);
      break;
    case "xfet2":
    case "zfet2":
      soul = EvolveSoul(Souls.Fet, 2);
      break;
    case "xfet3":
    case "zfet3":
      soul = EvolveSoul(Souls.Fet, 3);
      break;
    case "xfet4":
    case "zfet4":
      soul = EvolveSoul(Souls.Fet, 4);
      break;

    // hea
    case "xhea":
    case "zhea":
      soul = EvolveSoul(Souls.Health, 1);
      break;
    case "xhea2":
    case "zhea2":
      soul = EvolveSoul(Souls.Health, 2);
      break;
    case "xhea3":
    case "zhea3":
      soul = EvolveSoul(Souls.Health, 3);
      break;
    case "xhea4":
    case "zhea4":
      soul = EvolveSoul(Souls.Health, 4);
      break;

    // met
    case "xmet":
    case "zmet":
      soul = EvolveSoul(Souls.Mettle, 1);
      break;
    case "xmet2":
    case "zmet2":
      soul = EvolveSoul(Souls.Mettle, 2);
      break;
    case "xmet3":
    case "zmet3":
      soul = EvolveSoul(Souls.Mettle, 3);
      break;
    case "xmet4":
    case "zmet4":
      soul = EvolveSoul(Souls.Mettle, 4);
      break;

    // pho
    case "xpho":
    case "zpho":
      soul = EvolveSoul(Souls.Phost, 1);
      break;
    case "xpho2":
    case "zpho2":
      soul = EvolveSoul(Souls.Phost, 2);
      break;
    case "xpho3":
    case "zpho3":
      soul = EvolveSoul(Souls.Phost, 3);
      break;
    case "xpho4":
    case "zpho4":
      soul = EvolveSoul(Souls.Phost, 4);
      break;

    // sha
    case "xsha":
    case "zsha":
      soul = EvolveSoul(Souls.Shapt, 1);
      break;
    case "xsha2":
    case "zsha2":
      soul = EvolveSoul(Souls.Shapt, 2);
      break;
    case "xsha3":
    case "zsha3":
      soul = EvolveSoul(Souls.Shapt, 3);
      break;
    case "xsha4":
    case "zsha4":
      soul = EvolveSoul(Souls.Shapt, 4);
      break;

    // tri
    case "xtri":
    case "ztri":
      soul = EvolveSoul(Souls.Trist, 1);
      break;
    case "xtri2":
    case "ztri2":
      soul = EvolveSoul(Souls.Trist, 2);
      break;
    case "xtri3":
    case "ztri3":
      soul = EvolveSoul(Souls.Trist, 3);
      break;
    case "xtri4":
    case "ztri4":
      soul = EvolveSoul(Souls.Trist, 4);
      break;

    // Wist
    case "xwis":
    case "zwis":
      soul = EvolveSoul(Wist, 1);
      break;
    case "xwis2":
    case "zwis2":
      soul = EvolveSoul(Wist, 2);
      break;
    case "xwis3":
    case "zwis3":
      soul = EvolveSoul(Wist, 3);
      break;
    case "xwis4":
    case "zwis4":
      soul = EvolveSoul(Wist, 4);
      break;
  }
  if (!soul) return [];

  // TODO: Should we handle Fatigue? Probably not.

  const souls: ReadonlySoul[] = [];
  for (let i = 0; i < Quantity; i++) {
    souls.push(soul);
  }

  return souls;
}

function ParseRoom({
  $type,
  Id,
  IsSealed, // not visible
  IsShrouded, // able to be unlocked
  HasPreviouslyUnshrouded,
}: Payload): Room | null {
  if ($type !== "PopulateTerrainFeatureCommand") return null;
  // NOTE: this includes I think the open skill aspect slots!!
  // TODO: all start with "wt.", e.g. "wt.hor.4", horoma slot 4 is open.
  if (Id.indexOf("wt.") == 0) return null;

  const roomData = GetRoomById(Id);
  const room: Room = {
    id: Id,
    label: roomData.label,
    sealed: IsSealed,
    shrouded: IsShrouded,
    hasPreviouslyUnshrouded: HasPreviouslyUnshrouded,
  };
  for (const principle of Principles) {
    const required = roomData.preslots[0].required as PrincipleMap;
    if (required[principle]) {
      room[principle] = required[principle];
    }
  }
  return room;
}