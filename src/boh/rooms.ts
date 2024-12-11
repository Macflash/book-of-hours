import { TerrainData } from "../data/terrain";
import { PrincipleMap } from "./principles";

export interface Room extends PrincipleMap {
  id: string;
  label: string;

  shrouded?: boolean; // Not unlocked
  sealed?: boolean; // Hidden
  hasPreviouslyUnshrouded?: boolean; // Has it been unlocked. idk maybe it can reshroud?
}

export function GetRoomById(id: string) {
  id = "terrain." + id;
  const room = TerrainData.find((t) => t.id == id);
  if (!room) throw new Error(`Couldn't find room ${id}`);
  return room;
}
