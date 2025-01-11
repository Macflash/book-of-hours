import React from "react";
import { GetAssistants } from "../boh/assistance";
import { PrincipleColor, ForAllPrinciples, Principle } from "../boh/principles";
import { Save } from "../boh/save";
import { Principlable, Principlables } from "../components/principleList";
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

  console.log("assistants", allAssistants, alwaysAssistants);

  const renewableSlotables = GetSlotablesFromSave(save, true);
  const allSlotables = GetSlotablesFromSave(save, false);

  const assistanceMap = ForAllPrinciples((p) => ({
    max: FindBestWorkstationByPrinciple(p, allAssistants, allSlotables),
    mid: FindBestWorkstationByPrinciple(p, alwaysAssistants, allSlotables),
    min: FindBestWorkstationByPrinciple(
      p,
      alwaysAssistants,
      renewableSlotables
    ),
  }));

  // list rooms that need to be unlocked
  const roomsToOpen = save.rooms.filter((r) => r.shrouded && !r.sealed);
  console.log("rooms to open", roomsToOpen);

  return (
    <div>
      {/* Assistance you can get */}
      <div>
        {[...assistanceMap.entries()]
          .flatMap(
            ([principle, { max, mid, min }]) =>
              [
                [principle, max],
                [principle, mid],
                [principle, min],
              ] as [Principle, BestWorkstation][]
          )
          .filter(([principle, { bestSum }]) =>
            roomsToOpen.find((r) => r[principle] && bestSum >= r[principle])
          )
          .sort((a, b) => a[1].bestSum - b[1].bestSum)
          .map(([principle, { bestWorkstation, bestSum, bestSlotMap }], i) => {
            const slotables = bestSlotMap
              .values()
              .toArray()
              .filter((s) => s?.[principle]);
            const roomsYouCanOpenWithThisPrinciple = roomsToOpen.filter(
              (r) => r[principle] && bestSum >= r[principle]
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
