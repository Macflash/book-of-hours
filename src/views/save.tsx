import { Save } from "../boh/save";

export function SaveView({ save }: { save: Save }) {
  return (
    <div>
      Your save:
      <div>Souls: {save.souls.length}</div>
      <div>Skills: {save.skills.length}</div>
      <div>
        Rooms: {save.rooms.filter((r) => !r.shrouded && !r.sealed).length}
      </div>
      <div>Workstations: {save.workstations.length}</div>
      <div>Items: {save.items.length}</div>
      <div>Books: {save.books.length}</div>
    </div>
  );
}
