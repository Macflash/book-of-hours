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
  SumPrinciples,
} from "../boh/principles";
import { Soul } from "../boh/souls";
import { Save } from "../boh/save";
import { Season } from "../boh/seasons";
import { FavMemories, Item, Items } from "../boh/crafting";
import { PrincipleSpan } from "../components/principleList";

interface Help {
  principle: Principle;
  assistant: Assistant;
  soul: Soul;
  memory: Item;
  value: number;
  tool: Item;
  beverage: Item;
}

export function AssistanceView({ save }: { save: Save }) {
  const [season, setSeason] = React.useState<Season | undefined>(undefined);

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
    const memory = FindBestByPrinciple(principle, FavMemories);
    const beverage = FindBestByPrinciple(
      principle,
      Items.filter(({ beverage }) => beverage)
    );
    const tool = FindBestByPrinciple(
      principle,
      Items.filter(({ tool, device }) => tool && !device)
    );
    const device = FindBestByPrinciple(
      principle,
      Items.filter(({ tool, device }) => device)
    );
    const sum = SumPrinciples(principle, soul, memory, beverage, tool);
    const easyA = FindBestByPrinciple(principle, easyAssistants);
    const specialA = FindBestByPrinciple(principle, specialAssistants);
    easyAssistanceMap.set(principle, {
      assistant: easyA,
      principle,
      memory,
      soul,
      beverage,
      tool,
      value: sum + Or0(easyA[principle]),
    });

    bestAssistanceMap.set(principle, {
      assistant: specialA,
      principle,
      soul,
      memory,
      beverage,
      tool,
      value: sum + Or0(specialA[principle]),
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
      <div style={{ flexWrap: "wrap", display: "flex", flexDirection: "row" }}>
        {[...bestAssistanceMap.values()]
          .sort((a, b) => b.value - a.value)
          .map(
            ({ principle, tool, beverage, assistant, memory, soul, value }) => (
              <div
                key={principle}
                style={{
                  flex: 1,
                  padding: 5,
                  border: `1px solid ${PrincipleColor(principle)}`,
                  margin: 5,
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
                    <span>
                      {assistant.label
                        .replace("Elegiac", "")
                        .replace("Surrealist", "")
                        .replace("Consulting", "")
                        .replace("Travelling", "")
                        .replace("'s Assistance", "")
                        .trim()}{" "}
                      ({assistant[principle]})
                    </span>
                    <div>
                      {memory[principle] ? (
                        <span>
                          {memory.label}:{memory[principle]}
                        </span>
                      ) : null}
                      {soul[principle] ? (
                        <span style={{ color: soul.color }}>
                          {" "}
                          {soul.label}:{soul[principle]}
                        </span>
                      ) : null}
                      {tool[principle] ? (
                        <span>
                          {" "}
                          {tool.label}:{tool[principle]}
                        </span>
                      ) : null}
                      {beverage[principle] ? (
                        <span>
                          {" "}
                          {beverage.label}:{beverage[principle]}
                        </span>
                      ) : null}
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
