import { AspectMap, MatchesRequiredAspects } from "../boh/aspects";
import { GetAvailableMemoriesFromSave, Memory } from "../boh/crafting";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  PrincipleColor,
  SumPrinciples,
  ForAllPrinciples,
  Or0,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes";
import { Save } from "../boh/save";
import { Skill } from "../boh/skills";
import { Soul } from "../boh/souls";
import {
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";
import { Principlable, PrincipleList } from "../components/principleList";

interface Help {
  principle: Principle;
  soul: Soul;
  skill: Skill;
  value: number;
  memory: Memory;
}

export function ReadingView({ save }: { save: Save }) {
  const desks = save.workstations.filter((w) =>
    w.slots.some((s) => s.required.readable)
  );
  console.log("desks", desks);

  const workstationPrincipleMap = ForAllPrinciples((p) => {
    // Filter out books and paper since that is what we need to read bro.
    return FindBestWorkstationByPrinciple(
      p,
      desks,
      GetSlotablesFromSave(save).filter(
        (s) => !s.blank && !s.readable && !s.device
      )
    );
  });

  console.log("desks per principle", workstationPrincipleMap);

  const booksToMaster = save.books.filter(
    (b) =>
      !b.mastered &&
      Principles.some(
        (principle) =>
          b[principle] &&
          Or0(workstationPrincipleMap.get(principle)?.bestSum) > b[principle]
      )
  );
  console.log("books you can master", booksToMaster);

  return (
    <div>
      <div>
        {[...workstationPrincipleMap.entries()]
          .sort((a, b) => b[1].bestSum - a[1].bestSum)
          .map(([principle, { bestWorkstation, bestSum, bestSlotMap }]) => (
            <div
              key={principle}
              style={{
                padding: 3,
                margin: 3,
                border: `1px solid ${PrincipleColor(principle)}`,
              }}
            >
              <span key={principle}>
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
                  <Principlable principlable={bestWorkstation!} save={save} />
                  {", "}
                  {bestSlotMap
                    .values()
                    .toArray()
                    .filter((s) => s && s[principle])
                    .map((s) => (
                      <>
                        <Principlable
                          principlable={s}
                          principle={principle}
                          save={save}
                        />
                        {", "}
                      </>
                    ))}
                  {/* {skill?.[principle] ? (
                    <span>
                      {skill.label}({skill[principle]}){" "}
                    </span>
                  ) : null}
                  {soul?.[principle] ? (
                    <span style={{ color: soul.color }}>
                      {soul.label}({soul[principle]}){" "}
                    </span>
                  ) : null}
                  {memory?.[principle] ? (
                    <span
                      title={GetCraftingHintString(memory.id, save)}
                      style={{
                        color: save.items.some((item) => item.id == memory.id)
                          ? "lightgreen"
                          : undefined,
                      }}
                    >
                      {memory.label} ({memory[principle]})
                    </span> */}
                  {/* ) : null} */}
                </span>
              </span>
            </div>
          ))}
      </div>
      <div>
        {booksToMaster.map((b) => (
          <div>
            {b.label} <PrincipleList {...b} />
          </div>
        ))}
      </div>
      <div>{!booksToMaster.length ? "Can't read anything right now" : ""}</div>
    </div>
  );
}
