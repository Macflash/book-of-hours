import { GetAspectsWithPrefix } from "../boh/aspects";
import { Book, spawnsNumen } from "../boh/book";
import {
  Principles,
  PrincipleColor,
  ForAllPrinciples,
  Or0,
  MixedPrincipleColor,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes_hints";
import { Save } from "../boh/save";
import { GetSkillById, Skill, Skills } from "../boh/skills";
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
import { useSlowMemo } from "../components/useSlowMemo";

export function ReadingView({ save }: { save: Save }) {
  const workstationPrincipleMap = useSlowMemo(
    () =>
      ForAllPrinciples((p) => {
        // Filter out books and paper since that is what we need to read bro.
        return FindBestWorkstationByPrinciple(
          p,
          save.workstations.filter((w) =>
            w.slots.some((s) => s.required.readable),
          ),
          GetSlotablesFromSave(save).filter(
            (s) => s && !s.blank && !s.readable && !s.device,
          ),
        );
      }),
    [save],
  );
  // console.log("workstationPrincipleMap", workstationPrincipleMap);

  const [selectedSchool, schoolSelect] = useSchoolSelect();
  const [selectedPrinciple, principleSelect] = usePrincipleSelect();
  const [status, statusSelect] = useStatusSelect();

  const booksToRead = save.books.filter(
    (b) =>
      !b.mastered &&
      (!b.language || save.skills.some((s) => s.id == b.language)),
  );

  const booksYouCanRead = booksToRead.filter((b) =>
    Principles.some(
      (principle) =>
        b[principle] &&
        b[principle] <= Or0(workstationPrincipleMap?.get(principle)?.bestSum),
    ),
  );

  const skillsYouCanRead = booksYouCanRead
    .mapProp("mastering")
    .mapProp("id")
    .unique()
    .map((id) => {
      const existing = save.skills.findBy("id", id);
      if (existing) return existing;
      const newSkill = GetSkillById(id)!;
      newSkill.skill = 0;
      return newSkill;
    });

  const [selectedSkill, skillSelect] = useSkillSelect(skillsYouCanRead);

  const skillsYouCouldGet = skillsYouCanRead
    .filter((skill) => !selectedSkill || selectedSkill.id == skill.id)
    .filter((skill) => !selectedPrinciple || skill[selectedPrinciple])
    .filter((skill) => !selectedSchool || (skill as any)["w." + selectedSchool])
    .map((skill) => {
      const books = booksYouCanRead.filter((b) => b.mastering.id == skill.id);
      const levelsYouCanGet = books.sum((b) => b.mastering.level);
      return { skill, books, levelsYouCanGet };
    });

  // const skillsYouHave = skillsYouCouldGet
  //   .filter(({ skill }) => skill.skill > 0)
  //   .sortDesc(({ skill }) => skill);
  // const uncommitedSkills = skillsYouHave.filter(
  //   ({ existingSkill }) => !existingSkill?.["wisdom.committed"],
  // );

  // const openTreeNodes = save.tree.filter(({ unlocked }) => !unlocked);

  // const newOrUncommitedSkills = skillsYouCouldGet
  //   .filter(({ existingSkill }) => !existingSkill?.["wisdom.committed"])
  //   .map((val) => {
  //     return {
  //       ...val,
  //       schools: openTreeNodes.filter(
  //         (node) =>
  //           Or0(val.levelsYouCanGet) >= node.skillLevel &&
  //           GetAspectsWithPrefix(val.skill, "w." + node.type).length,
  //       ),
  //     };
  //   })
  //   .filter(({ schools }) => schools.length);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 5,
          padding: 5,
          position: "sticky",
          top: 35,
          background: "rgb(40, 44, 52)",
        }}
      >
        {schoolSelect}
        {principleSelect}
        {statusSelect}
        {skillSelect}
      </div>

      <Section title="Skills"></Section>

      {/* <SkillSection
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
      /> */}

      <div>
        {!booksYouCanRead.length ? "Can't read anything right now" : ""}
      </div>

      {/* Section of HOW to read them. */}
      <Section title={`Books to read (${booksYouCanRead.length})`}>
        {workstationPrincipleMap
          ? [...(workstationPrincipleMap.entries() || [])].map(
              ([principle, { bestWorkstation, bestSum, bestSlotMap }]) => {
                const slotables = bestSlotMap
                  .values()
                  .toArray()
                  .filter((s) => s?.[principle]);
                const booksYouCanReadWithThisPrinciple = booksYouCanRead.filter(
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
                        <Principlable
                          principlable={bestWorkstation!}
                          save={save}
                        />
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
              },
            )
          : "Loading..."}
      </Section>
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

function SchoolSelect({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (selected: string) => void;
}) {
  return (
    <select
      style={{ color: "white", background: "#282c34" }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
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
  );
}

export function useSchoolSelect(): [string | undefined, JSX.Element] {
  const [selected, setSelected] = React.useState<string>("");

  return [
    selected,
    <SchoolSelect selected={selected} setSelected={setSelected} />,
  ];
}

function SkillSelect({
  selected,
  setSelected,
  values,
}: {
  selected: string;
  setSelected: (selected: string) => void;
  values: Skill[];
}) {
  return (
    <select
      style={{
        color: selected
          ? MixedPrincipleColor(values.findBy("id", selected) || {})
          : "white",
        background: "#282c34",
      }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
      }}
    >
      <option value="" style={{ color: "white" }}>
        All skills
      </option>

      <optgroup label="Current skills">
        {values
          .filter((skill) => skill.skill)
          .sortDesc((s) => s.skill || 0)
          .map((skill) => (
            <SkillOption key={skill.id} skill={skill} />
          ))}
      </optgroup>

      <optgroup label="New skills">
        {values
          .filter((skill) => !skill.skill)
          .map((skill) => (
            <SkillOption key={skill.id} skill={skill} />
          ))}
      </optgroup>
    </select>
  );
}

function SkillOption({ skill }: { skill: Skill }) {
  return (
    <option value={skill.id} style={{ color: MixedPrincipleColor(skill) }}>
      {skill.label} ({skill.skill || "new"})
    </option>
  );
}

export function useSkillSelect(
  skills: Skill[],
): [Skill | undefined, JSX.Element] {
  const [selected, setSelected] = React.useState<string>("");
  return [
    skills.find((s) => s.id == selected),
    <SkillSelect
      selected={selected}
      setSelected={setSelected}
      values={skills}
    />,
  ];
}

type Status = "known" | "cancommit" | "new" | "all";
export function useStatusSelect(): [Status, JSX.Element] {
  const [status, setStatus] = React.useState<Status>("all");

  const select = (
    <select
      style={{ color: "white", background: "#282c34" }}
      value={status}
      onChange={({ target: { value } }) => setStatus(value as Status)}
    >
      <option value="all">All skill types</option>
      <option value="cancommit">Skills you can commit</option>
      <option value="known">Skills you know</option>
      <option value="new">Skills you can learn</option>
    </select>
  );

  return [status, select];
}
