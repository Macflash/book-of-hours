import { GetAspectsWithPrefix } from "../boh/aspects";
import { Book, spawnsNumen } from "../boh/book";
import {
  Principles,
  PrincipleColor,
  ForAllPrinciples,
  Or0,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes_hints";
import { Save } from "../boh/save";
import { GetSkillById, Skill } from "../boh/skills";
import { TreeNode } from "../boh/tree";
import {
  FindBestWorkstationByPrinciple,
  GetSlotablesFromSave,
} from "../boh/workstation";
import {
  AspectList,
  Principlable,
  Principlables,
  PrincipleList,
  usePrincipleSelect,
} from "../components/principleList";
import { Section } from "../components/section";
import React from "react";

export function ReadingView({ save }: { save: Save }) {
  const [school, setSchool] = React.useState<string>("");
  const [selectedPrinciple, principleSelect] = usePrincipleSelect();

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
    .map(({ mastering: { id } }) => id)
    .unique()
    .map((s) => {
      const existingSkill = save.skills.find((skill) => skill.id == s);
      const skill = GetSkillById(s)!;
      const books = booksToMaster.filter(
        (b) => b.mastering.id.replace("x.", "s.") == s,
      );
      const currentLevel = Or0(existingSkill?.skill);
      const levelsYouCanGet = books.sum((b) => b.mastering.level);
      return { existingSkill, skill, books, currentLevel, levelsYouCanGet };
    })
    .filter(({ skill }) => !school || (skill as any)["w." + school])
    .filter(({ skill }) => !selectedPrinciple || skill[selectedPrinciple]);

  const skillsYouHave = skillsYouCouldGet
    .filter(({ existingSkill }) => existingSkill)
    .sort((a, b) => Or0(b.existingSkill?.skill) - Or0(a.existingSkill?.skill));
  const uncommitedSkills = skillsYouHave.filter(
    ({ existingSkill }) => !existingSkill?.["wisdom.committed"],
  );

  const openTreeNodes = save.tree.filter(({ unlocked }) => !unlocked);

  const newOrUncommitedSkills = skillsYouCouldGet
    .filter(({ existingSkill }) => !existingSkill?.["wisdom.committed"])
    .map((val) => {
      return {
        ...val,
        schools: openTreeNodes.filter(
          (node) =>
            Or0(val.levelsYouCanGet) >= node.skillLevel &&
            GetAspectsWithPrefix(val.skill, "w." + node.type).length,
        ),
      };
    })
    .filter(({ schools }) => schools.length);

  // console.log("skillsYouCouldCommit", commitCount, skillsYouCouldCommit);

  return (
    <div>
      <select
        style={{ color: "white", background: "#282c34" }}
        value={school}
        onChange={({ target: { value } }) => {
          setSchool(value);
        }}
      >
        <option value="">All schools</option>
        <option value="illumination">Illumination</option>
        <option value="ithastry">Ithastry</option>
        <option value="preservation">Preservation</option>
        <option value="horomachistry">Horomachistry</option>
        <option value="hushery">Hushery</option>
        <option value="bosk">Bosk</option>
        <option value="nyctodromy">Nyctodromy</option>
        <option value="birdsong">Birdsong</option>
        <option value="skolekosophy">Skolekosophy</option>
      </select>

      {principleSelect}

      <SkillSection
        title="Skills you could commit"
        skillList={newOrUncommitedSkills}
        save={save}
      />

      <SkillSection
        title="All skills"
        skillList={[...skillsYouCouldGet]}
        save={save}
      />

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

      <SkillSection
        title="New skills"
        skillList={skillsYouCouldGet.notIn(skillsYouHave)}
        save={save}
      />

      <div>{!booksToMaster.length ? "Can't read anything right now" : ""}</div>

      {/* Section of HOW to read them. */}
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
    currentLevel: number;
    levelsYouCanGet: number;
    schools?: TreeNode[];
  }[];
  title: string;
  save: Save;
}) {
  return (
    <Section title={`${title} (${skillList.length})`} startCollapsed>
      {[...skillList]
        .sortDesc(
          ({ currentLevel, levelsYouCanGet }) => currentLevel + levelsYouCanGet,
        )
        .map(({ skill, existingSkill, books, schools }) => (
          <SkillStatus
            key={skill.id}
            skill={skill}
            existingSkill={existingSkill}
            books={books}
            save={save}
            schools={schools}
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
  schools,
}: {
  existingSkill: Skill | undefined;
  skill: Skill;
  books: Book[];
  save: Save;
  schools?: TreeNode[];
}) {
  let title = "";
  const currentLevel = Or0(existingSkill?.skill);
  if (currentLevel) title += ` (${currentLevel})`;

  const levelsYouCanGet = books.sum((b) => b.mastering.level);
  if (levelsYouCanGet) title += ` + ${levelsYouCanGet}`;

  if (currentLevel && levelsYouCanGet) {
    title += ` = ${currentLevel + levelsYouCanGet}*`;
  }

  return (
    <Section
      title={
        <div>
          <Principlable principlable={skill} />
          {title}
        </div>
      }
    >
      {schools?.map((s) => s.type + ":" + s.skillLevel).join()}
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
