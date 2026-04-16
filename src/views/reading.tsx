import { Book, FindBooksThatSpawnNumen, spawnsNumen } from "../boh/book";
import {
  Principles,
  PrincipleColor,
  ForAllPrinciples,
  Or0,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes_hints";
import { Save } from "../boh/save";
import { GetSkillById, Skill } from "../boh/skills";
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
import { Section } from "../components/section";

export function ReadingView({ save }: { save: Save }) {
  const desks = save.workstations.filter((w) =>
    w.slots.some((s) => s.required.readable),
  );
  const workstationPrincipleMap = ForAllPrinciples((p) => {
    // Filter out books and paper since that is what we need to read bro.
    return FindBestWorkstationByPrinciple(
      p,
      desks,
      GetSlotablesFromSave(save).filter(
        (s) => s && !s.blank && !s.readable && !s.device,
      ),
    );
  });

  const booksToMaster = save.books.filter(
    (b) =>
      !b.mastered &&
      (!b.language || save.skills.some((s) => s.id == b.language)) &&
      Principles.some(
        (principle) =>
          b[principle] &&
          Or0(workstationPrincipleMap.get(principle)?.bestSum) >= b[principle],
      ),
  );

  const skillsYouCouldGet = booksToMaster
    .map((b) => b.mastering.id.replace("x.", "s."))
    .unique()
    .map((s) => {
      const existingSkill = save.skills.find((skill) => skill.id == s);
      const skill = GetSkillById(s)!;
      const books = booksToMaster.filter(
        (b) => b.mastering.id.replace("x.", "s.") == s,
      );
      return { existingSkill, skill, books };
    });

  const skillsYouHave = skillsYouCouldGet
    .filter(({ existingSkill }) => existingSkill)
    .sort((a, b) => Or0(b.existingSkill?.skill) - Or0(a.existingSkill?.skill));
  const uncommitedSkills = skillsYouHave.filter(
    ({ existingSkill }) => !existingSkill?.["wisdom.committed"],
  );
  const skillsYouDont = skillsYouCouldGet.notIn(skillsYouHave);
  // console.log("skillsYouCouldGet", skillsYouCouldGet);
  console.log("skillsYouHave", skillsYouHave);
  console.log("uncommitedSkills", uncommitedSkills);
  console.log("skillsYouDont", skillsYouDont);

  return (
    <div>
      <SkillSection
        title="Commited skills"
        skillList={[...skillsYouHave].notIn(uncommitedSkills)}
        save={save}
      />

      <SkillSection
        title="Uncommited skills"
        skillList={uncommitedSkills}
        save={save}
      />

      <SkillSection title="New skills" skillList={skillsYouDont} save={save} />

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
              (b) => b[principle] && bestSum >= b[principle],
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

function SkillSection({
  skillList,
  title,
  save,
}: {
  skillList: {
    existingSkill: Skill | undefined;
    skill: Skill;
    books: Book[];
  }[];
  title: string;
  save: Save;
}) {
  return (
    <Section title={`${title} (${skillList.length})`} startCollapsed>
      {[...skillList].map(({ skill, existingSkill, books }) => (
        <SkillStatus
          key={skill.id}
          skill={skill}
          existingSkill={existingSkill}
          books={books}
          save={save}
        />
      ))}
    </Section>
  );
}

function SkillStatus({
  skill,
  existingSkill,
  books,
  save,
}: {
  existingSkill: Skill | undefined;
  skill: Skill;
  books: Book[];
  save: Save;
}) {
  return (
    <Section title={skill.label}>
      <AspectList {...(existingSkill || skill)} />
      <div>
        {books.map((b) => (
          <div
            key={b.id}
            style={{
              color: b.contaminated
                ? "darkorange"
                : spawnsNumen(b)
                  ? "red"
                  : "",
            }}
            title={GetCraftingHintString(b, save)}
          >
            {b.label} <PrincipleList {...b} /> +{b.mastering.level}
          </div>
        ))}
      </div>
    </Section>
  );
}
