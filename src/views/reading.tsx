import { FavMemories, IsFavMemory, Memories, Memory } from "../boh/crafting";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  Or0,
  PrincipleColor,
} from "../boh/principles";
import { Save } from "../boh/save";
import { Skill } from "../boh/skills";
import { Soul } from "../boh/souls";

interface Help {
  principle: Principle;
  soul: Soul;
  skill: Skill;
  value: number;
  memory: Memory;
}

export function ReadingView({ save }: { save: Save }) {
  // Get best skill and soul per principle
  const bestMap = new Map<Principle, Help>();
  for (const principle of Principles) {
    const skill = FindBestByPrinciple(principle, [...save.skills.values()]);
    const soul = FindBestByPrinciple(principle, save.souls);
    const favMemory = FindBestByPrinciple(principle, FavMemories);
    const memory = FindBestByPrinciple(
      principle,
      Memories.filter((m) => !m.numen)
    );
    const bestMemory =
      Or0(favMemory[principle]) >= Or0(memory[principle]) ? favMemory : memory;
    bestMap.set(principle, {
      principle,
      skill,
      memory: bestMemory,
      soul,
      value:
        Or0(soul[principle]) +
        Or0(skill[principle]) +
        Or0(bestMemory[principle]),
    });
  }

  return (
    <div>
      {[...bestMap.values()]
        .sort((a, b) => b.value - a.value)
        .map(({ memory, principle, skill, soul, value }) => (
          <div key={principle}>
            <span key={principle}>
              <span
                style={{
                  color: PrincipleColor(principle),
                }}
              >
                {principle}: {value}{" "}
              </span>
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                {skill.label}({skill[principle]}) &
                <span style={{ color: soul.color }}>
                  {soul.label}({soul[principle]})
                </span>{" "}
                &{" "}
                <span
                  style={{ color: IsFavMemory(memory.id) ? "gold" : undefined }}
                >
                  {memory.label}
                </span>
                ({memory[principle]})
              </span>
            </span>
          </div>
        ))}
    </div>
  );
}
