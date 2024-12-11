import React from "react";
import { Assistant, Assistants, GetAssistants } from "../boh/assistance";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  PrincipleColor,
  PrincipleMap,
  MapPrinciples,
} from "../boh/principles";
import { Soul } from "../boh/souls";
import { Save } from "../boh/save";
import { Season } from "../boh/seasons";

interface Help {
  principle: Principle;
  assistant: Assistant;
  soul: Soul;
  value: number;
}

export function AssistanceView({ save }: { save: Save }) {
  const [season, setSeason] = React.useState<Season | undefined>(undefined);
  const [allowUnusual, setAllowUnusual] = React.useState<boolean>(true);

  console.log(save.souls);
  console.log(FindBestByPrinciple("moon", save.souls));

  // list rooms that need to be unlocked
  const roomsToOpen = save.rooms.filter((r) => r.shrouded && !r.sealed);
  console.log(roomsToOpen);

  const assistants = GetAssistants(season, allowUnusual);

  // Get best assistance per principle
  const bestAssistanceMap = new Map<Principle, Help>();
  for (const principle of Principles) {
    const bestAssistant = FindBestByPrinciple(principle, assistants);
    const bestSoul = FindBestByPrinciple(principle, save.souls);
    bestAssistanceMap.set(principle, {
      principle,
      assistant: bestAssistant,
      soul: bestSoul,
      value: (bestSoul[principle] || 0) + (bestAssistant[principle] || 0),
    });
  }

  const roomsYouCanOpen = roomsToOpen.filter((room) => {
    for (const principle of Principles) {
      if (
        (room[principle] ?? Number.MAX_SAFE_INTEGER) <=
        bestAssistanceMap.get(principle)!.value
      ) {
        return true;
      }
    }
    return false;
  });
  console.log("rooms you CAN open", roomsYouCanOpen);

  return (
    <div className="App">
      <header className="App-header">
        {roomsYouCanOpen.length > 0 ? (
          <div>
            <div>Rooms you can open</div>
            <div>
              {roomsYouCanOpen.map((room, i) => (
                <div key={room.id}>
                  {room.label}:{PrincipleList(room)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          "You can't open any rooms "
        )}
        {/* Rooms to open */}
        <div>
          <div>Rooms</div>
          <div>
            {roomsToOpen.map((room, i) => (
              <div key={room.id}>
                {room.label}:
                {MapPrinciples(room).map(([principle, value]) => (
                  <PrincipleSpan
                    principle={principle}
                    value={bestAssistanceMap.get(principle)!.value - value}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Assistance you can get */}
        <div>Assistance</div>
        <div>
          {[...bestAssistanceMap.values()].map(
            ({ principle, assistant, soul, value }) => (
              <div>
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
                    {assistant.label}({assistant[principle]}) &
                    <span style={{ color: soul.color }}>
                      {soul.label}({soul[principle]})
                    </span>
                  </span>
                </span>
              </div>
            )
          )}
        </div>
      </header>
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
