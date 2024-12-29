import React from "react";
import { Assistant, Assistants, GetAssistants } from "../boh/assistance";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  PrincipleColor,
  MapPrinciples,
  Or0,
  SumPrinciples,
  ForAllPrinciples,
} from "../boh/principles";
import { Soul } from "../boh/souls";
import { Save } from "../boh/save";
import { Season } from "../boh/seasons";
import {
  FavMemories,
  GetAvailableMemoriesFromSave,
  Item,
  Items,
} from "../boh/crafting";
import {
  Principlable,
  Principlables,
  PrincipleSpan,
} from "../components/principleList";
import { FindBooksThatSpawnId } from "../boh/book";
import { GetCraftingHintString } from "../boh/recipes";
import {
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";

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
  const [season, setSeason] = React.useState<Season | undefined | "unusual">(
    undefined
  );

  // TODO: So this finds the MAX you can do, but we actually want...
  // the MINIMUM that is good enough?

  const assistants = GetAssistants(
    season == "unusual" ? "none" : season,
    season == "unusual" || season == undefined
  );

  console.log("assistants", assistants);

  const assistanceMap = ForAllPrinciples((p) =>
    FindBestWorkstationByPrinciple(
      p,
      assistants,
      GetSlotablesFromSave(save).filter((s) => s && !s.device)
    )
  );

  // list rooms that need to be unlocked
  const roomsToOpen = save.rooms.filter((r) => r.shrouded && !r.sealed);
  console.log("rooms to open", roomsToOpen);

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
          <option value="unusual">unusual</option>
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="autumn">autumn</option>
          <option value="winter">winter</option>
        </select>
      </div>
      {/* {roomsYouCanOpenEasily.length > 0 ? (
        <div>
          <div>Rooms you can open EASILY</div>
          <div>
            {roomsYouCanOpenEasily.map(({ room, principles }, i) => (
              <div
                key={room.id}
                style={{ border: "1px solid white", padding: 3, margin: 3 }}
              >
                {room.label}:{" "}
                {principles.map((p) => (
                  <div>
                    {PrincipleSpan({ principle: p, value: room[p] })}
                    {easyAssistanceMap.get(p)?.assistant.label},
                    {easyAssistanceMap.get(p)?.memory.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null} */}
      {/* {roomsYouCanOpen.length > 0 ? (
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
      )} */}

      {/* Assistance you can get */}
      <div>
        {[...assistanceMap.entries()]
          .sort((a, b) => b[1].bestSum - a[1].bestSum)
          .map(([principle, { bestWorkstation, bestSum, bestSlotMap }]) => {
            const slotables = bestSlotMap
              .values()
              .toArray()
              .filter((s) => s?.[principle]);
            const roomsYouCanOpenWithThisPrinciple = roomsToOpen.filter(
              (r) => r[principle] && bestSum >= r[principle]
            );
            return (
              <div
                key={principle}
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
      {/* 
      <div>
        <div>Numen</div>
        {Items.filter(({ numen }) => numen).map((i) => (
          <div
            key={i.id}
            title={FindBooksThatSpawnId(i.id)
              .map(({ label }) => label)
              .join(", ")}
          >
            {i.label}:{" "}
            {MapPrinciples(i).map(([principle, value]) => (
              <PrincipleSpan
                key={principle}
                principle={principle}
                value={value}
              />
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
}
