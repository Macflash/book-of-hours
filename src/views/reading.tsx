import { AspectMap } from "../boh/aspects";
import { FindBooksThatSpawnId } from "../boh/book";
import {
  FavMemories,
  GetAvailableMemoriesFromSave,
  IsFavMemory,
  MatchesAnyRequirement,
  Memories,
  Memory,
} from "../boh/crafting";
import {
  Principle,
  Principles,
  FindBestByPrinciple,
  Or0,
  PrincipleColor,
  SumPrinciples,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes";
import { Save } from "../boh/save";
import { Skill } from "../boh/skills";
import { Soul } from "../boh/souls";
import { PrincipleList } from "../components/principleList";

interface Help {
  principle: Principle;
  soul: Soul;
  skill: Skill;
  value: number;
  memory: Memory;
}

export function ReadingView({ save }: { save: Save }) {
  const possibleMemories = GetAvailableMemoriesFromSave(save);
  // Get best skill and soul per principle
  const bestMap = new Map<Principle, Help>();
  for (const principle of Principles) {
    const skill = FindBestByPrinciple(principle, [...save.skills.values()]);
    const soul = FindBestByPrinciple(principle, save.souls);
    const memory = FindBestByPrinciple(principle, possibleMemories);

    bestMap.set(principle, {
      principle,
      skill,
      memory,
      soul,
      value: SumPrinciples(principle, soul, skill, memory),
    });
  }

  const bestReading: AspectMap = {};
  for (const principle of Principles) {
    bestReading[principle] = bestMap.get(principle)?.value;
  }

  const booksToMaster = save.availableBooks.filter(
    (b) => !b.mastered && MatchesAnyRequirement(b, bestReading)
  );
  console.log("books you can master", booksToMaster);

  return (
    <div>
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
                  {skill?.[principle] ? (
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
                        color: save.availableItems.some(
                          (item) => item.id == memory.id
                        )
                          ? "lightgreen"
                          : undefined,
                      }}
                    >
                      {memory.label} ({memory[principle]})
                    </span>
                  ) : null}
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
