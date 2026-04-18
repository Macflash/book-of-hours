import React from "react";
import { Assistant, GetAssistants } from "../boh/assistance";
import {
  PrincipleColor,
  ForAllPrinciples,
  Principle,
  Principles,
} from "../boh/principles";
import { Save } from "../boh/save";
import {
  Principlable,
  Principlables,
  PrincipleList,
  usePrincipleSelect,
} from "../components/principleList";
import {
  BestWorkstation,
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";
import { Section } from "../components/section";
import { Room } from "../boh/rooms";

export function AssistanceView({ save }: { save: Save }) {
  // TODO: So this finds the MAX you can do, but we actually want...
  // the MINIMUM that is good enough?

  const [selectedPrinciple, principleSelect] = usePrincipleSelect();
  const assistants = GetAssistants().filter(
    (assistant) => !selectedPrinciple || assistant[selectedPrinciple],
  );
  const [selectedAssistant, assistantSelect] = useAssistantSelect(assistants);

  const roomsToOpen = save.rooms
    .filter((r) => r.shrouded && !r.sealed)
    .filter((r) => !selectedPrinciple || r[selectedPrinciple]);
  const [selectedRoom, roomSelect] = useRoomSelect(roomsToOpen);

  return (
    <div>
      <div>
        {principleSelect}
        {assistantSelect}
        {roomSelect}
      </div>
      {/* Assistant selection */}

      <Section title={`Rooms to open (${roomsToOpen.length})`} collapse>
        <Principlables principlables={roomsToOpen} allPrinciples />
      </Section>

      <ShinyNewAssistanceView
        save={save}
        principles={selectedPrinciple ? [selectedPrinciple] : [...Principles]}
        assistants={selectedAssistant ? [selectedAssistant] : assistants}
        rooms={selectedRoom ? [selectedRoom] : roomsToOpen}
      />

      <LegacyAssistanceView
        save={save}
        principles={selectedPrinciple ? [selectedPrinciple] : [...Principles]}
        assistants={selectedAssistant ? [selectedAssistant] : assistants}
        rooms={selectedRoom ? [selectedRoom] : roomsToOpen}
      />
    </div>
  );
}

function ShinyNewAssistanceView({
  save,
  principles,
  assistants,
  rooms,
}: {
  save: Save;
  principles: Principle[];
  assistants: Assistant[];
  rooms: Room[];
}) {
  const principlesToShow = principles.map((principle) => {});

  return <div></div>;
}

function LegacyAssistanceView({
  save,
  principles,
  assistants,
  rooms,
}: {
  save: Save;
  principles: Principle[];
  assistants: Assistant[];
  rooms: Room[];
}) {
  // const renewableSlotables = GetSlotablesFromSave(save, true);
  const allSlotables = GetSlotablesFromSave(save, false);

  const assistanceMap = ForAllPrinciples(
    (p) => FindBestWorkstationByPrinciple(p, assistants, allSlotables),
    principles,
  );

  return (
    <div>
      {/* Assistance you can get */}
      {[...assistanceMap.entries()]
        .filter(([principle, { bestSum }]) =>
          rooms.find((r) => r[principle] && bestSum >= r[principle]),
        )
        .sort((a, b) => a[1].bestSum - b[1].bestSum)
        .map(([principle, { bestWorkstation, bestSum, bestSlotMap }], i) => {
          const slotables = bestSlotMap
            .values()
            .toArray()
            .filter((s) => s?.[principle]);
          const roomsYouCanOpenWithThisPrinciple = rooms.filter(
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
  );
}

function AssistantSelect({
  assistants,
  selected,
  setSelected,
}: {
  assistants: Assistant[];
  selected: string;
  setSelected: (newSelected: string) => void;
}) {
  return (
    <select
      style={{
        color: "white",
        background: "#282c34",
      }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
      }}
    >
      <option value="">All assistants ({assistants.length})</option>
      <AssistantGroup
        label="Regular"
        assistants={assistants.filter((a) => !a.unusual && !a.season)}
      />
      <AssistantGroup
        label="Seasonal"
        assistants={assistants.filter(({ season }) => !!season)}
      />
      <AssistantGroup
        label="Unusual"
        assistants={assistants.filter(({ unusual }) => !!unusual)}
      />
    </select>
  );
}

function AssistantGroup({
  assistants,
  label,
}: {
  assistants: Assistant[];
  label: string;
}) {
  return (
    <optgroup
      label={label}
      style={{
        fontSize: 18,
        fontWeight: "bold",
        margin: "10px 5px",
        borderBottom: "1px solid grey",
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
          {a.season ? `${a.season}: ` : ""}
          {a.label}
        </option>
      ))}
    </optgroup>
  );
}

function useAssistantSelect(
  assistants: Assistant[],
): [Assistant | undefined, JSX.Element] {
  const [selected, setSelected] = React.useState<string | "">("");

  const assistantSelect = (
    <AssistantSelect
      assistants={assistants}
      selected={selected}
      setSelected={setSelected}
    />
  );

  return [assistants.find(({ id }) => id === selected), assistantSelect];
}

function RoomSelect({
  rooms,
  selected,
  setSelected,
}: {
  rooms: Room[];
  selected: string;
  setSelected: (newSelected: string) => void;
}) {
  return (
    <select
      style={{
        color: "white",
        background: "#282c34",
      }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
      }}
    >
      <option value="">All rooms ({rooms.length})</option>
      {rooms.map((r) => (
        <option key={r.id} value={r.id}>
          {r.label}
        </option>
      ))}
    </select>
  );
}

function useRoomSelect(rooms: Room[]): [Room | undefined, JSX.Element] {
  const [selected, setSelected] = React.useState<string | "">("");

  const roomSelect = (
    <RoomSelect rooms={rooms} selected={selected} setSelected={setSelected} />
  );

  return [rooms.find(({ id }) => id === selected), roomSelect];
}
