import React from "react";
import { Assistant, GetAssistants } from "../boh/assistance";
import { PrincipleColor, ForAllPrinciples, Principle } from "../boh/principles";
import { Save } from "../boh/save";
import {
  Principlable,
  Principlables,
  PrincipleList,
} from "../components/principleList";
import {
  BestWorkstation,
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";

export function AssistanceView({ save }: { save: Save }) {
  // TODO: So this finds the MAX you can do, but we actually want...
  // the MINIMUM that is good enough?

  const allAssistants = GetAssistants();
  const alwaysAssistants = GetAssistants("none", false);
  const [selected, setSelected] = React.useState<Assistant[]>([]);

  console.log("assistants", allAssistants, alwaysAssistants);

  const renewableSlotables = GetSlotablesFromSave(save, true);
  const allSlotables = GetSlotablesFromSave(save, false);

  const assistanceMap = ForAllPrinciples((p) => ({
    max: FindBestWorkstationByPrinciple(p, selected, allSlotables),
    min: FindBestWorkstationByPrinciple(p, selected, renewableSlotables),
  }));

  // list rooms that need to be unlocked
  const roomsToOpen = save.rooms.filter((r) => r.shrouded && !r.sealed);
  console.log("rooms to open", roomsToOpen);

  return (
    <div>
      {/* Assistant selection */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AssistantSelect
          title="Regular"
          assistants={alwaysAssistants}
          save={save}
          selected={selected}
          setSelected={setSelected}
        />
        <AssistantSelect
          title="Seasonal"
          assistants={allAssistants.filter(({ season }) => !!season)}
          save={save}
          selected={selected}
          setSelected={setSelected}
        />
        <AssistantSelect
          title="Unusual"
          assistants={allAssistants.filter(({ unusual }) => !!unusual)}
          save={save}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      {/* Assistance you can get */}
      <div>
        {[...assistanceMap.entries()]
          .flatMap(
            ([principle, { min, max }]) =>
              [
                [principle, min],
                [principle, max],
              ] as [Principle, BestWorkstation][],
          )
          .filter(([principle, { bestSum }]) =>
            roomsToOpen.find((r) => r[principle] && bestSum >= r[principle]),
          )
          .sort((a, b) => b[1].bestSum - a[1].bestSum)
          .map(([principle, { bestWorkstation, bestSum, bestSlotMap }], i) => {
            const slotables = bestSlotMap
              .values()
              .toArray()
              .filter((s) => s?.[principle]);
            const roomsYouCanOpenWithThisPrinciple = roomsToOpen.filter(
              (r) => r[principle] && bestSum >= r[principle],
            );
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: 5,
                  border: `2px solid ${PrincipleColor(principle)}`,
                  margin: 5,
                }}
              >
                <span>
                  <span
                    style={{
                      color: PrincipleColor(principle),
                    }}
                  >
                    {principle}: {bestSum}{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    <Principlable
                      principlable={bestWorkstation!}
                      save={save}
                      principle={principle}
                    />
                    <div>
                      <Principlables
                        principlables={slotables}
                        principle={principle}
                        save={save}
                      />
                    </div>
                    {/*  List what rooms you can open with this principle */}
                    {roomsYouCanOpenWithThisPrinciple.length ? (
                      <div
                        style={{
                          border: "2px solid grey",
                          margin: 3,
                          padding: 3,
                        }}
                      >
                        <div>You can open:</div>
                        <Principlables
                          principlables={roomsYouCanOpenWithThisPrinciple}
                          principle={principle}
                          save={save}
                        />
                      </div>
                    ) : null}
                  </span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function AssistantSelect({
  assistants,
  save,
  title,
  selected,
  setSelected,
}: {
  assistants: Assistant[];
  save: Save;
  title: string;
  selected: Assistant[];
  setSelected: (newSelected: Assistant[]) => void;
}) {
  const otherSelected = selected.filter((s) => !assistants.includes(s));
  return (
    <div>
      <div style={{ margin: 5 }}>
        {title}
        <button
          style={{ margin: 5 }}
          onClick={() => {
            setSelected(otherSelected);
          }}
        >
          X
        </button>
      </div>
      <select
        size={assistants.length}
        style={{
          flex: "none",
          height: "fit-content",
          overflow: "hidden",
          margin: 5,
        }}
        multiple
        value={selected.map((s) => s.id)}
        onChange={({ target: { selectedOptions } }) => {
          const mySelected = [...selectedOptions].map(
            (o) => assistants.find((a) => a.id === o.value)!,
          );
          setSelected([...otherSelected, ...mySelected]);
        }}
      >
        {assistants.map((a) => (
          <option
            key={a.id}
            value={a.id}
            style={{
              fontSize: 16,
              padding: "5px 10px",
            }}
          >
            {" "}
            <Principlable principlable={a} save={save} />
          </option>
        ))}
      </select>
    </div>
  );
}
