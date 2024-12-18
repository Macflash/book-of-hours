import { FindBooksThatSpawnId } from "../boh/book";
import { FavMemories, IsFavMemory, Memories, Memory } from "../boh/crafting";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  Or0,
  PrincipleColor,
  SumPrinciples,
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
    const memory = FindBestByPrinciple(principle, FavMemories);

    bestMap.set(principle, {
      principle,
      skill,
      memory,
      soul,
      value: SumPrinciples(principle, soul, skill, memory),
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
                  title={FindBooksThatSpawnId(memory.id)
                    .map(({ label }) => label)
                    .join(", ")}
                  style={{ color: IsFavMemory(memory.id) ? "gold" : undefined }}
                >
                  {memory.label} ({memory[principle]})
                </span>
              </span>
            </span>
          </div>
        ))}
    </div>
  );
}
