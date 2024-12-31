import React from "react";
import { Save } from "../boh/save";
import { Consider } from "../data/workstation_data";
import {
  GetSlotablesFromSave,
  MatchesSlot,
  Slot,
  Slotable,
  SumSlotAspects,
  Workstation,
} from "../boh/workstation";
import { PrincipleList } from "../components/principleList";

export function WorkstationView({ save }: { save: Save }) {
  const [workstation, setWorkstation] = React.useState(Consider as Workstation);
  const [slotmap, setSlotmap] = React.useState(new Map<Slot, Slotable>());

  const slotables = GetSlotablesFromSave(save);

  const aspects = SumSlotAspects(slotmap.values().toArray());
  console.log("aspects", aspects);

  return (
    <div>
      <div style={{ border: "1px solid grey", margin: 3, padding: 3 }}>
        Workstation{" "}
        <select value={workstation.id}>
          {save.workstations.map((ws) => (
            <option value={ws.id} key={ws.id}>
              {ws.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ border: "1px solid grey", margin: 3, padding: 3 }}>
        Slots
        {workstation.slots.map((slot) => (
          <div key={slot.id}>
            {slot.label}{" "}
            <select
              value={slotmap.get(slot)?.id || "empty"}
              onChange={(ev) => {
                const value = ev.target.value;
                const slotable = slotables.find((s) => s.id == value);
                if (value == "empty" || !slotable) slotmap.delete(slot);
                else slotmap.set(slot, slotable);
                setSlotmap(new Map(slotmap.entries()));
              }}
            >
              <option value="empty">Empty</option>
              {slotables
                .filter((slotable) => MatchesSlot(slot, slotable))
                .map((slotable, i) => (
                  <option value={slotable.id} key={i}>
                    {slotable.label}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        Aspects
        <div>
          <PrincipleList {...aspects} />
        </div>
      </div>
    </div>
  );
}
