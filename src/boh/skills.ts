import { SkillData } from "../data/skill_data";
import { AspectMap } from "./aspects";
import { MixedPrincipleColor, Or0, Principles } from "./principles";

export interface SchoolMap {
  // Whether it is committed or not
  "wisdom.committed"?: number;

  // Schools
  "w.illumination"?: number;
  "w.ithastry"?: number;
  "w.preservation"?: number;
  "w.horomachistry"?: number;
  "w.hushery"?: number;
  "w.bosk"?: number;
  "w.nyctodromy"?: number;
  "w.birdsong"?: number;
  "w.skolekosophy"?: number;
}

export interface Skill extends AspectMap, SchoolMap {
  id: string;
  label: string;
  color?: string;

  // What's this?
  "a.xhausted"?: number;
}

function GenerateSkills(): Skill[] {
  const skills: Skill[] = [];
  for (const data of SkillData) {
    skills.push({
      ...data,
      ...data.aspects,
      id: data.id,
      label: data.Label,
      [data.id]: 1,
      // kind of cool, but also kind of crazy.
      // color: MixedPrincipleColor(data.aspects || {}),
    });
  }

  return skills;
}

export const Skills = GenerateSkills();

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

  skill.skill = Or0(skill.skill) + 1;

  return EvolveSkill(skill, level - 1);
}

export function GetSkillByEffectiveAgainstId(
  curedById: string,
  skills = Skills,
): Skill[] {
  return skills.filter((s) => (s as any)[curedById]);
}
