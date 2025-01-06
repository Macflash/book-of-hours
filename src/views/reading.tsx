import {
  Principle,
  Principles,
  PrincipleColor,
  ForAllPrinciples,
  Or0,
} from "../boh/principles";
import { Save } from "../boh/save";
import { GetSkillById } from "../boh/skills";
import {
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";
import {
  AspectList,
  Principlable,
  Principlables,
  PrincipleList,
} from "../components/principleList";

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
        (s) => s && !s.blank && !s.readable && !s.device
      )
    );
  });

  console.log("desks per principle", workstationPrincipleMap);

  const booksToMaster = save.books.filter(
    (b) =>
      !b.mastered &&
      (!b.language || save.skills.some((s) => s.id == b.language)) &&
      Principles.some(
        (principle) =>
          b[principle] &&
          Or0(workstationPrincipleMap.get(principle)?.bestSum) >= b[principle]
      )
  );
  console.log(
    "books left to read",
    save.books.filter((b) => !b.mastered)
  );
  console.log("books you can master", booksToMaster);

  const skillsYouCouldGet = booksToMaster
    .map((b) => b.mastering.id.replace("x.", "s."))
    .unique()
    .map((s) => {
      const existingSkill = save.skills.find((skill) => skill.id == s);
      const skill = GetSkillById(s)!;
      const books = booksToMaster.filter(
        (b) => b.mastering.id.replace("x.", "s.") == s
      );
      return { existingSkill, skill, books };
    });

  const skillsYouHave = skillsYouCouldGet.filter(
    ({ existingSkill }) => existingSkill
  );
  const skillsYouDont = skillsYouCouldGet.notIn(skillsYouHave);
  console.log("skillsYouCouldGet", skillsYouCouldGet);
  console.log("skillsYouHave", skillsYouHave);
  console.log("skillsYouDont", skillsYouDont);

  return (
    <div>
      <div style={{ border: "1px solid grey", padding: 3, margin: 3 }}>
        Skills you have:{" "}
        {[...skillsYouHave, ...skillsYouDont].map(
          ({ skill, existingSkill, books }) => (
            <div
              key={skill.id}
              style={{ border: "1px solid grey", padding: 3, margin: 3 }}
            >
              {skill?.label}
              {existingSkill?.skill
                ? ` (${existingSkill.skill})`
                : " (new)"}{" "}
              <PrincipleList {...(existingSkill || skill)} />
              <div>
                {books.map((b) => (
                  <div key={b.id}>
                    {b.label} <PrincipleList {...b} /> +{b.mastering.level}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div>{!booksToMaster.length ? "Can't read anything right now" : ""}</div>
      <div>
        {[...workstationPrincipleMap.entries()]
          .sort((a, b) => b[1].bestSum - a[1].bestSum)
          .map(([principle, { bestWorkstation, bestSum, bestSlotMap }]) => {
            const slotables = bestSlotMap
              .values()
              .toArray()
              .filter((s) => s?.[principle]);
            const booksYouCanReadWithThisPrinciple = booksToMaster.filter(
              (b) => b[principle] && bestSum >= b[principle]
            );
            return (
              <div
                key={principle}
                style={{
                  padding: 3,
                  margin: 5,
                  border: `2px solid ${PrincipleColor(principle)}`,
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
                    <Principlable principlable={bestWorkstation!} save={save} />
                    <div>
                      <Principlables
                        principlables={slotables}
                        principle={principle}
                        save={save}
                      />
                    </div>
                    {/*  List what books you can read here */}
                    {booksYouCanReadWithThisPrinciple.length ? (
                      <div
                        style={{
                          border: "2px solid grey",
                          margin: 3,
                          padding: 3,
                        }}
                      >
                        <div>You can read:</div>
                        <Principlables
                          principlables={booksYouCanReadWithThisPrinciple}
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
