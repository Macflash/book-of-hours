import { SkillData } from "../data/skill_data";
import { GetAspectStartingWith } from "./aspects";
import { PrincipleMap, Principles } from "./principles";

export interface Skill extends PrincipleMap {
  id: string;
  label: string;
  level: number;
}

function GenerateSkills(): Skill[] {
  const skills: Skill[] = [];
  for (const data of SkillData) {
    const skill: Skill = {
      ...data,
      ...data.aspects,
      id: data.id,
      label: data.Label,
      level: 1,
    };
    // Shouldn't need this now.
    // for (const principle of Principles) {
    //   if (data.aspects[principle]) {
    //     skill[principle] = data.aspects[principle];
    //   }
    // }

    skills.push(skill);
  }

  return skills;
}

export const Skills = GenerateSkills();
console.log("Skills", Skills);

export function GetSkillById(id: string, level = 1): Skill {
  const skill = Skills.find((s) => s.id === id);
  if (!skill) throw new Error(`Couldn't find skill with id: ${id}`);
  return EvolveSkill(skill, level);
}

export function EvolveSkill(skill: Skill, level = 1): Skill {
  skill = { ...skill };
  if (level <= 1) return skill;
  for (const principle of Principles) {
    if (skill[principle]) skill[principle] += 1;
  }

  skill.level++;

  return EvolveSkill(skill, level - 1);
}

export function GetSkillByEffectiveAgainstId(
  curedById: string,
  skills = Skills
): Skill[] {
  return skills.filter((s) => (s as any)[curedById]);
}
