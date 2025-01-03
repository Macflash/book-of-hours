import React from "react";
import { GetAssistants } from "../boh/assistance";
import { PrincipleColor, ForAllPrinciples } from "../boh/principles";
import { Save } from "../boh/save";
import { Season } from "../boh/seasons";
import { Principlable, Principlables } from "../components/principleList";
import {
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";

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

  const maxAssistanceMap = ForAllPrinciples((p) =>
    FindBestWorkstationByPrinciple(
      p,
      assistants as any[], // AH! we aren't including their aspects.
      GetSlotablesFromSave(save)
    )
  );

  const renewables = GetSlotablesFromSave(save, true);
  console.log("renewables", renewables);

  const renewableAssistanceMap = ForAllPrinciples((p) =>
    FindBestWorkstationByPrinciple(
      p,
      assistants as any[],
      GetSlotablesFromSave(save, true)
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

      {/* Assistance you can get */}
      <div>
        {[...renewableAssistanceMap.entries()]
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
    </div>
  );
}
