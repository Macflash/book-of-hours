import { SkillData } from "../data/skill_data";
import { AspectMap } from "./aspects";
import { Or0, PrincipleColor, Principles } from "./principles";

export interface Skill extends AspectMap {
  id: string;
  label: string;
  color?: string;

  "wisdom.committed"?: number;
  "a.xhausted"?: number;
}

function GenerateSkills(): Skill[] {
  const skills: Skill[] = [];
  for (const data of SkillData) {
    const principles = Principles.map((p) => ({ p, val: data.aspects[p] || 0 }))
      .filter(({ val }) => val > 0)
      .sort((a, b) => b.val - a.val)
      .map(({ p }) => PrincipleColor(p));
    skills.push({
      ...data,
      ...data.aspects,
      id: data.id,
      label: data.Label,
      [data.id]: 1,
      // kind of cool, but also kind of crazy.
      color: `color-mix(in srgb, ${principles[0]}, ${principles[1]})`,
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
  skills = Skills
): Skill[] {
  return skills.filter((s) => (s as any)[curedById]);
}
