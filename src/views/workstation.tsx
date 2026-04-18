import React from "react";
import { Save } from "../boh/save";
import {
  Consider,
  GetSlotablesFromSave,
  MatchesSlot,
  Slot,
  Slotable,
  SumSlotAspects,
  Workstation,
  WorkstationAsSlotable,
} from "../boh/workstation";
import { GetAssistants } from "../boh/assistance";
import { Principle, PrincipleColor, Principles } from "../boh/principles";
import { AspectMap } from "../boh/aspects";
import { PrincipleList } from "../components/principleList";

export function WorkstationList({ save }: { save: Save }) {
  const [tabs, setTabs] = React.useState<string[]>([]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        background: "black",
        width: "100%",
      }}
    >
      {/* Tabs */}
      <div>
        {tabs.map((tab, i) => (
          <button key={i}>{tab}</button>
        ))}

        <button
          onClick={() => {
            setTabs([...tabs, "New" + tabs.length]);
          }}
        >
          +
        </button>
      </div>
      {/* Current station */}
    </div>
  );
}

export function WorkstationView({
  save,
  initialWorkstation = Consider,
}: {
  save: Save;
  initialWorkstation?: Workstation;
}) {
  const allWorkstations = [
    Consider as Workstation,
    ...(GetAssistants() as Workstation[]),
    ...save.workstations,
  ];

  const [workstation, setWorkstation] = React.useState(initialWorkstation);
  const [slotmap, setSlotmap] = React.useState(new Map<Slot, Slotable>());
  const slotables = GetSlotablesFromSave(save);

  const aspects = SumSlotAspects([
    WorkstationAsSlotable(workstation),
    ...slotmap.values().toArray(),
  ]);

  const [principle, setPrinciple] = React.useState<Principle | "all">("all");

  return (
    <div>
      <div
        style={{
          border: "1px solid grey",
          margin: 3,
          padding: 3,
          display: "flex",
          gap: 10,
        }}
      >
        <div>
          <div>Principle</div>
          <PrincipleSelect
            aspects={aspects}
            selected={principle as Principle}
            setSelected={setPrinciple}
          />
        </div>

        <div>
          <div>Workstation</div>
          <WorkstationSelect
            principle={principle as Principle}
            workstations={save.workstations}
            selected={workstation.id}
            setSelected={(id) => {
              setWorkstation(allWorkstations.find((w) => w.id == id)!);
              setSlotmap(new Map());
            }}
          />
        </div>
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
                .uniqueBy("id")
                .filter(
                  (slotable) =>
                    MatchesSlot(slot, slotable) &&
                    (principle == "all" || slotable[principle as Principle]),
                )
                .sortDesc((slotable) => slotable[principle as Principle] || 0)
                .map((slotable, i) => (
                  <option value={slotable.id} key={i}>
                    {slotable.label}
                    {slotable[principle as Principle]
                      ? ` (${slotable[principle as Principle]})`
                      : ""}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>
      <PrincipleList {...aspects} />
    </div>
  );
}

function PrincipleSelect({
  selected,
  setSelected,
  aspects,
}: {
  selected: Principle;
  setSelected: (p: Principle) => void;
  aspects: AspectMap;
}) {
  return (
    <select
      style={{
        background: "#222",
        color: PrincipleColor(selected) || "white",
      }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value as Principle);
      }}
    >
      <option value="all">All Principles</option>
      {Principles.map((p) => (
        <option
          key={p}
          value={p}
          style={{
            background: "#222",
            color: PrincipleColor(p),
            fontSize: 16,
            padding: "5px 10px",
          }}
        >
          {p} {aspects[p] ? `(${aspects[p]})` : ""}
        </option>
      ))}
    </select>
  );
}

function WorkstationSelect({
  selected,
  setSelected,
  workstations,
  principle,
}: {
  selected: string;
  setSelected: (id: string) => void;
  workstations: Workstation[];
  principle: Principle;
}) {
  return (
    <select
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
      }}
    >
      {[Consider].map((ws) => (
        <option value={ws.id} key={ws.id}>
          {ws.label}
        </option>
      ))}
      <optgroup label="Assistants">
        {GetAssistants()
          .filter((ws) => (principle as string) == "all" || ws[principle])
          .map((ws) => (
            <option value={ws.id} key={ws.id}>
              {ws.label}
              {ws[principle] ? ` (${ws[principle]})` : ""}
            </option>
          ))}
      </optgroup>
      <optgroup label="Workstations">
        {workstations
          .filter(
            (ws) =>
              (principle as string) == "all" ||
              !ws.hints ||
              ws.hints.indexOf(principle) >= 0,
          )
          .map((ws) => (
            <option value={ws.id} key={ws.id}>
              {ws.label}
            </option>
          ))}
      </optgroup>
    </select>
  );
}
