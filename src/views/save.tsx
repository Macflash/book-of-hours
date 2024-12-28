import { Save } from "../boh/save";

export function SaveView({ save }: { save: Save }) {
  return (
    <div>
      Your save:
      <div>
        Souls ({save.souls.length}): {save.souls.map((s) => s.label).join(", ")}
      </div>
      <div>
        Skills ({save.skills.size}):{" "}
        {[...save.skills.values()].map((s) => s.label).join(", ")}
      </div>
      <div>Rooms: {save.rooms.map((s) => s.label).join(", ")}</div>
      <div>
        Workstations: {save.workstations.map((s) => s.label).join(", ")}
      </div>
    </div>
  );
}
