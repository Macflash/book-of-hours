import { WorkstationData } from "../data/workstation_data";
import { AddAspectsInplace } from "./aspects";
import { Book, GetBookById } from "./book";
import { Item, GetItemById } from "./items";
import { Or0, PrincipleMap, Principles } from "./principles";
import { GetRoomById, Room } from "./rooms";
import { GetSkillById, Skill } from "./skills";
import { Soul, ReadonlySoul, EvolveSoul, Chor, Ereb } from "./souls";
import * as Souls from "./souls";
import { GetAllWorkstations, Workstation, Workstations } from "./workstation";

export interface Save {
  souls: Soul[];
  skills: Skill[];
  rooms: Room[];

  workstations: Workstation[];
  beds: Workstation[];

  items: Item[];
  books: Book[];

  madeBefore: Set<string>; //TODO: this isn't quite right unique elements, or recipes ambitt'd
}

interface Mutations extends PrincipleMap {
  skill?: number;
}

interface SaveJson {
  CharacterCreationCommands: {
    UniqueElementsManifested: string[];
    AmbittableRecipesUnlocked: string[];
  }[];

  // This is all your stuff, like souls, skills, committed skills
  // Every item in the house or your hand, etc.
  RootPopulationCommand: {
    Spheres: Sphere[];
  };
}

interface Payload {
  $type: string;
  Id: string;
  /** Things or items seem to use this */
  EntityId?: string;

  /** Workstations or "verbs" use this */
  VerbId?: string;
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
  Location: Location;
}

interface Location {
  AtSpherePath: {
    Path: string;
  };
}

interface Sphere {
  Tokens: Token[];
}

export function EmptySave(): Save {
  return {
    souls: [],
    skills: [],
    rooms: [],
    workstations: [],
    beds: [],
    items: [],
    books: [],
    madeBefore: new Set(),
  };
}

export function ParseLocationString(location: string | undefined) {
  if (!location) return null;
  if (location.startsWith("~/library!")) {
    location = location.replace("~/library!", "");
    const splits = location.split("/");
    const roomId = splits[0];

    const room = GetRoomById(roomId);
    let label = room.label;

    const spaceId = splits[1]
      .replace("thingslot", "")
      .replace("comfortslot", "")
      .replace("spacespherea", "")
      .replace("spacesphereb", "")
      .replace("spacesphere", "")
      // .replace("shelfspace", "")
      .replace(".1", "")
      .replace(".2", "")
      .replace(".3", "")
      .replace(".4", "")
      .replace(".5", "");
    // .replace("sphere", "");
    if (spaceId && !spaceId.includes("fitmentslot")) label += ` (${spaceId})`;

    return label;
  }
}

export function ParseSave(saveData: SaveJson) {
  const ccc = saveData?.CharacterCreationCommands?.[0];
  const save: Save = EmptySave();
  save.madeBefore = new Set<string>([
    ...(ccc?.AmbittableRecipesUnlocked || []),
    ...(ccc?.UniqueElementsManifested || []),
  ]);
  // TODO: this doesn't give the values you'd expect?
  // console.log(
  //   "Made before",
  //   save.madeBefore,
  //   saveData.CharacterCreationCommands
  // );

  const spheres = saveData.RootPopulationCommand.Spheres;

  function parseSphere(sphere: Sphere) {
    for (const token of sphere.Tokens) {
      const path = token.Location?.AtSpherePath?.Path;
      if (path?.includes("christmasslot")) continue;
      if (path?.includes("~/purchases")) {
        console.log("skipping", path, token.Payload);
        continue;
      }
      if (token.Payload) parsePayload(token.Payload, path);
    }
  }

  function parseDominions(doms: Dominion[]) {
    for (const dom of doms) {
      for (const sphere of dom.Spheres) {
        parseSphere(sphere);
      }
    }
  }

  function parsePayload(payload: Payload, location?: string) {
    save.souls.push(...ParseSoul(payload));
    save.items.push(...ParseItem(payload, location));

    const book = ParseBook(payload, location);
    if (book) save.books.push(book);

    const skill = ParseSkill(payload);
    if (skill) {
      const index = save.skills.findIndex((s) => s.id == skill.id);
      const existing = save.skills[index];
      if (!existing) {
        save.skills.push(skill);
      } else if (Or0(skill.skill) > Or0(existing.skill)) {
        // console.log("replacing skill", skill);
        save.skills[index] = skill;
      }
    }

    const workstation = ParseWorkstation(payload, location);
    if (workstation) {
      if (workstation.type == "bed") save.beds.push(workstation);
      else save.workstations.push(workstation);
    }

    const room = ParseRoom(payload);
    if (room) save.rooms.push(room);

    if (payload.Dominions) {
      if (payload.IsSealed) {
        // console.log("skipping sealed dominion", payload.Id);
      } else parseDominions(payload.Dominions);
    }
  }

  for (const sphere of spheres) {
    parseSphere(sphere);
  }

  return save;
}

const PATH_SOUL = "~/hand.abilities";

function ParseWorkstation(
  { VerbId }: Payload,
  location?: string
): Workstation | null {
  if (!VerbId) return null;
  // "VerbId": "library.desk.reading.consider",
  const ws = Workstations.find((w) => w.id === VerbId) as Workstation;
  if (!ws) return null;

  if (location) ws.location = location;
  return ws;
}

function ParseSkill({ EntityId, Mutations }: Payload): Readonly<Skill> | null {
  if (!EntityId) return null;
  if (EntityId?.indexOf("s.") == 0) {
    const skill = { ...GetSkillById(EntityId) };
    if (!skill) return null;
    if (Mutations) AddAspectsInplace(skill, Mutations);
    return skill;
    // return EvolveSkill(skill, (Mutations.skill || 0) + 1);
  }

  return null;
}

function ParseBook(
  { EntityId, Mutations }: Payload,
  location?: string
): Readonly<Book> | null {
  if (!EntityId) return null;
  if (!EntityId.startsWith("t.")) return null;

  const book = GetBookById(EntityId);
  if (!book) return null;

  if (Mutations) {
    AddAspectsInplace(book, Mutations);
    for (const key in Mutations) {
      if (key.startsWith("mastery.") && (Mutations as any)[key]) {
        book.mastered = true;
      }
      if (key.startsWith("contamination.")) book.contaminated = true;
    }
  }

  if (location) book.location = location;

  return book;
}

function Duplicate<T>(t: T, quantity = 1) {
  const dupes: T[] = [];
  for (let i = 0; i < quantity; i++) dupes.push({ ...t });
  // if (quantity > 1 && dupes[0] == dupes[1]) throw "WTF";
  return dupes;
}

function ParseItem(
  { EntityId, Quantity }: Payload,
  location?: string
): Array<Readonly<Item>> {
  if (!EntityId) return [];

  const item = GetItemById(EntityId);
  if (!item) return [];

  if (location) item.location = location;

  return Duplicate(item, Quantity);
}

function ParseSoul({ EntityId, Quantity }: Payload): ReadonlySoul[] {
  if (!EntityId) return [];
  const element = Souls.GetElementFromId(EntityId.substring(0, 4));
  if (!element) return [];
  const level = EntityId[4];
  let soul = Souls.GetSoulByElement(element);
  if (!soul) return [];

  soul = EvolveSoul(soul, level ? Number(level) : 1);

  return Duplicate(soul, Quantity);
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

  // Filter out totally hidden rooms as you can't use them or their stuff.
  if (room.sealed) return null;

  for (const principle of Principles) {
    const required = roomData.preslots[0].required as PrincipleMap;
    if (required[principle]) {
      room[principle] = required[principle];
    }
  }
  return room;
}
