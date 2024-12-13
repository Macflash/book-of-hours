import React from "react";
import { Assistant, Assistants, GetAssistants } from "../boh/assistance";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  PrincipleColor,
  PrincipleMap,
  MapPrinciples,
  Or0,
} from "../boh/principles";
import { Soul } from "../boh/souls";
import { Save } from "../boh/save";
import { Season } from "../boh/seasons";
import { GetItemById, Item } from "../boh/crafting";

interface Help {
  principle: Principle;
  assistant: Assistant;
  soul: Soul;
  memory: Item;
  value: number;
}

const favMemories: Item[] = [
  "didumos",
  "windinwaiting",
  "ascendant.harmony",
  "wormwood.dream",
  "old.wound",
  "forbidden.epic",
  "invincible.audacity",
  "enduring.reflection",
  "earthsign",
  "numen.desc",
].map((id) => GetItemById(id)! as Item);
console.log("fav memories", favMemories);

export function AssistanceView({ save }: { save: Save }) {
  const [season, setSeason] = React.useState<Season | undefined>(undefined);
  const [allowUnusual, setAllowUnusual] = React.useState<boolean>(true);

  // list rooms that need to be unlocked
  const roomsToOpen = save.rooms.filter((r) => r.shrouded && !r.sealed);
  console.log(roomsToOpen);

  const easyAssistants = GetAssistants(season, false);
  const specialAssistants = GetAssistants(undefined, true);

  // Get best assistance per principle
  const easyAssistanceMap = new Map<Principle, Help>();
  const bestAssistanceMap = new Map<Principle, Help>();
  for (const principle of Principles) {
    const soul = FindBestByPrinciple(principle, save.souls);
    const memory = FindBestByPrinciple(principle, favMemories);
    const easyA = FindBestByPrinciple(principle, easyAssistants);
    const specialA = FindBestByPrinciple(principle, specialAssistants);
    easyAssistanceMap.set(principle, {
      assistant: easyA,
      principle,
      memory,
      soul,
      value:
        Or0(soul[principle]) + Or0(memory[principle]) + Or0(easyA[principle]),
    });

    bestAssistanceMap.set(principle, {
      assistant: specialA,
      principle,
      soul,
      memory,
      value:
        Or0(soul[principle]) +
        Or0(memory[principle]) +
        Or0(specialA[principle]),
    });
  }

  const roomsYouCanOpenEasily = roomsToOpen
    .map((room) => {
      const principles = Principles.filter(
        (principle) =>
          (room[principle] ?? Number.MAX_SAFE_INTEGER) <=
          easyAssistanceMap.get(principle)!.value
      );
      return {
        room,
        principles,
      };
    })
    .filter(({ principles }) => principles.length);
  console.log("rooms you CAN open EASILY", roomsYouCanOpenEasily);

  const roomsYouCanOpen = roomsToOpen
    .map((room) => {
      const principles = Principles.filter(
        (principle) =>
          (room[principle] ?? Number.MAX_SAFE_INTEGER) <=
          bestAssistanceMap.get(principle)!.value
      );
      return {
        room,
        principles,
      };
    })
    .filter(({ principles }) => principles.length);
  console.log("rooms you CAN open", roomsYouCanOpen);

  return (
    <div>
      <div>
        <select
          value={season}
          onChange={(ev) => {
            setSeason(ev.target.value as Season);
          }}
        >
          <option value="">Any</option>
          <option value="none">none</option>
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="autumn">autumn</option>
          <option value="winter">winter</option>
        </select>
      </div>
      {roomsYouCanOpenEasily.length > 0 ? (
        <div>
          <div>Rooms you can open EASILY</div>
          <div>
            {roomsYouCanOpenEasily.map(({ room, principles }, i) => (
              <div key={room.id}>
                {room.label}:{" "}
                {principles.map((p) => (
                  <span>
                    {PrincipleSpan({ principle: p, value: room[p] })}
                    {easyAssistanceMap.get(p)?.assistant.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {roomsYouCanOpen.length > 0 ? (
        <div>
          <div>Rooms you can open</div>
          <div>
            {roomsYouCanOpen.map(({ room, principles }, i) => (
              <div key={room.id}>
                {room.label}:{" "}
                {principles.map((p) =>
                  PrincipleSpan({ principle: p, value: room[p] })
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>Rooms</div>
          <div>
            {roomsToOpen.map((room, i) => (
              <div key={room.id}>
                {room.label}:
                {MapPrinciples(room).map(([principle, value]) => (
                  <PrincipleSpan
                    key={principle}
                    principle={principle}
                    value={bestAssistanceMap.get(principle)!.value - value}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assistance you can get */}
      <div>Assistance</div>
      <div>
        {[...bestAssistanceMap.values()].map(
          ({ principle, assistant, memory, soul, value }) => (
            <div
              key={principle}
              style={{
                border: `1px solid ${PrincipleColor(principle)}`,
                margin: 3,
              }}
            >
              <span key={principle}>
                <span
                  style={{
                    color: PrincipleColor(principle),
                  }}
                >
                  {principle}: {value}{" "}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {assistant.label}({assistant[principle]})
                  <div>
                    {Or0(memory[principle]) > 0 ? (
                      <>
                        {memory.label}({memory[principle]})
                      </>
                    ) : null}
                    <span style={{ color: soul.color }}>
                      {" "}
                      {soul.label}({soul[principle]})
                    </span>
                  </div>
                </span>
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

// TODO: Make this componetized!
function PrincipleList(map: PrincipleMap) {
  return (
    <>
      {Principles.filter((p) => map[p])
        .sort((a, b) => (map[b] || 0) - (map[a] || 0))
        .map((p) => PrincipleSpan({ principle: p, value: map[p] }))}
    </>
  );
}

function PrincipleSpan({
  principle,
  value,
}: {
  principle: Principle;
  value?: number;
}) {
  if (!value) return null;
  return (
    <span
      key={principle}
      style={{ fontSize: "1rem", color: PrincipleColor(principle) }}
    >
      {principle}: {value},{" "}
    </span>
  );
}
