import { Item, GetItemById } from "../boh/crafting";
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
  memory: item;
}

const favMemories: Item[] = [
  "didumos",
  "windinwaiting",
  "ascendant.harmony",
  "wormwood.dream",
  "old.wound",
  "forbidden.epic",
  "invincible.audacity",
  "enduring.reflection",
  "earthsign",
  "numen.desc",
].map((id) => GetItemById(id)! as Item);
console.log("fav memories", favMemories);

export function ReadingView({ save }: { save: Save }) {
  // Get best skill and soul per principle
  const bestMap = new Map<Principle, Help>();
  for (const principle of Principles) {
    const skill = FindBestByPrinciple(principle, [...save.skills.values()]);
    const soul = FindBestByPrinciple(principle, save.souls);
    const memory = FindBestByPrinciple(principle, favMemories);
    bestMap.set(principle, {
      principle,
      skill,
      memory,
      soul,
      value:
        Or0(soul[principle]) + Or0(skill[principle]) + Or0(memory[principle]),
    });
  }

  return (
    <div>
      {[...bestMap.values()].map(
        ({ memory, principle, skill, soul, value }) => (
          <div>
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
                & {memory.label}({memory[principle]})
              </span>
            </span>
          </div>
        )
      )}
    </div>
  );
}
