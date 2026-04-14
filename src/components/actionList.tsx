import { AspectMap } from "../boh/aspects";
import { Book } from "../boh/book";
import { Item } from "../boh/items";
import { PrincipleMap } from "../boh/principles";
import { Room } from "../boh/rooms";
import { Slot, Workstation } from "../boh/workstation";

export interface Action {
  goal?: Item | Book | Room; // or just like.. A principle?

  displayAction?:
    | "Craft"
    | "Master"
    | "Open"
    | "Decontaminate"
    | "Evolve"
    | string; // ETC.

  // Where we are currently doing it
  workstation?: Workstation;
  slotMap?: Map<Slot, Slottable>;
}
