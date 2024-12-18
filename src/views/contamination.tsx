import React from "react";
import {
  Memories,
  Memory,
  FavMemories,
  GetItemsByConsiderSpawnId,
  Item,
  GetAllWorkstations,
  MatchesAnyRequirement,
} from "../boh/crafting";
import {
  FindBestByPrinciple,
  Principle,
  PrincipleColor,
  Principles,
  SumPrinciples,
} from "../boh/principles";
import { Save } from "../boh/save";
import { PrincipleList } from "../components/principleList";
import {
  GetCraftingHintString,
  GetRecipesByResult,
  Recipe,
  ToRecipeString,
} from "../boh/recipes";
import {
  GetSkillByEffectiveAgainstId,
  GetSkillById,
  Skill,
} from "../boh/skills";
import { FindBooksThatSpawnId } from "../boh/book";
import { Contaminations } from "../boh/contaminations";

export function ContaminationView({ save }: { save: Save }) {
  const skillMap = new Map<string, Skill[]>(
    Contaminations.map((c) => [
      c.id,
      GetSkillByEffectiveAgainstId(c.curedBy, [...save.skills.values()]),
    ])
  );

  return (
    <div>
      <div>Contaminations</div>
      <div>
        {Contaminations.map((c) => {
          const soul = FindBestByPrinciple(c.curedWith, save.souls);
          const memory = FindBestByPrinciple(c.curedWith, FavMemories);
          // idk what else can you use? Depends on the workstation...
          const value = SumPrinciples(c.curedWith, soul, memory);

          // OK so the hard part is finding a workstation that we can do this crap at?
          const possibleWorkstations = GetAllWorkstations().filter(
            (ws) =>
              ws.hints.includes(c.curedWith) &&
              ws.slots.some((slot) => slot.required["readable"])
          );
          // Also has to accept a book
          console.log(possibleWorkstations);

          return (
            <div
              style={{
                border: `2px solid ${PrincipleColor(c.curedWith)}`,
                padding: 3,
                margin: 3,
              }}
            >
              <div>
                {c.label}: <PrincipleList {...c} /> ({value})
              </div>
              <div>
                {skillMap.get(c.id)?.map((skill) => {
                  const matchingWS = possibleWorkstations.filter((ws) =>
                    ws.slots.some(
                      (slot) =>
                        slot.essential?.["skill"] &&
                        MatchesAnyRequirement(slot.required, skill)
                    )
                  );

                  return (
                    <div
                      style={{ color: !matchingWS.length ? "darkgrey" : "" }}
                      key={skill.id}
                      title={matchingWS.map((ws) => ws.label).join("\n")}
                    >
                      {skill.label}{" "}
                      {!matchingWS ? "no matching work stations" : ""}
                    </div>
                  );
                })}
              </div>
              <div style={{ color: soul.color }}>
                {soul.label}({soul[c.curedWith]})
              </div>
              <div title={GetCraftingHintString(memory.id)}>
                {memory.label}({memory[c.curedWith]})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
