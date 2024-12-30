import { Aspect, GetAspectsWithPrefix } from "../boh/aspects";
import { Or0 } from "../boh/principles";
import { Save } from "../boh/save";
import { Element, GetElementFromId, GetSoulByElement } from "../boh/souls";
import { FindMatchingSlots } from "../boh/workstation";

export function EvolveView({ save }: { save: Save }) {
  const committedSkills = save.skills.filter((s) => s["wisdom.committed"]);
  const evolveSkills = committedSkills
    .filter((s) => !s["a.xhausted"])
    .map((skill) => {
      const attuned = GetElementFromId(GetAspectsWithPrefix(skill, "a.")[0]);
      const wisdom = GetAspectsWithPrefix(skill, "w.")[0];
      return { skill, attuned, wisdom };
    });
  //   console.log("evolveSkills", evolveSkills);

  // Count souls and find ones with copies.
  const soulMap = new Map<string, number[]>();
  for (const soul of save.souls) {
    const arr = soulMap.get(soul.element) ?? [];
    arr[soul.level] = 1 + Or0(arr[soul.level]);
    soulMap.set(soul.element, arr);
  }
  //   console.log("soulMap", soulMap);

  const soulsWithCopies = soulMap
    .entries()
    .filter(([_, arr]) => arr.some((n) => n >= 2))
    .map(([element]) => element)
    .toArray();
  //   console.log("soulsWithCopies", soulsWithCopies);

  const skillsWithSoulCopies = evolveSkills
    .map(({ skill, attuned, wisdom }) => {
      const matchingSoul = soulsWithCopies.find(
        (element) => element == attuned
      );
      if (!matchingSoul) return null;
      return { skill, wisdom, soul: GetSoulByElement(matchingSoul as Element) };
    })
    .filter((x) => x)
    .map((x) => x!);
  console.log("skillsWithSoulCopies", skillsWithSoulCopies);

  // Filter by workstations that can slot 2 souls of the same type, and the skill!
  const evolveWorkstations = save.workstations.filter(
    (ws) => ws.aspects && GetAspectsWithPrefix(ws.aspects, "e.")
  );
  console.log("evolveWs", evolveWorkstations);

  const combos = skillsWithSoulCopies
    .map(({ skill, soul, wisdom }) => {
      const matchingWorkstations = evolveWorkstations
        .filter(
          // Filter for matching wisdom evolve via.
          (ws) => ws.aspects[("e." + wisdom) as Aspect]
        )
        .map((ws) => {
          // Filter for skill slot
          const skillSlots = FindMatchingSlots(ws, skill);
          const soulSlots = FindMatchingSlots(ws, soul);
          return { ws, skillSlots, soulSlots };
        })
        .filter(
          ({ skillSlots, soulSlots }) =>
            skillSlots.length >= 1 && soulSlots.length >= 2
        );

      // Need 1 skill slot, and 2 soul slots!

      return {
        skill,
        soul,
        wisdom,
        matchingWorkstations,
      };
    })
    .filter(({ matchingWorkstations }) => matchingWorkstations.length);
  console.log("combos", combos);

  // TODO: Could also use EVOLVE VIA memories.

  return (
    <div>
      <div style={{ border: "1px solid grey", padding: 3, margin: 3 }}>
        <div>Skills that can evolve: </div>
        {evolveSkills.map(({ skill, attuned, wisdom }) => {
          return (
            <div key={skill.id}>
              {skill.label} ({attuned} & {wisdom})
            </div>
          );
        })}
      </div>
      <div style={{ border: "1px solid grey", padding: 3, margin: 3 }}>
        <div>Souls with copies:</div>
        {soulsWithCopies.map((element) => {
          const arr = soulMap.get(element)!;
          return arr.map((count, level) =>
            count >= 2 ? (
              <div key={element + level}>
                {pluses(level)}
                {element} ({count})
              </div>
            ) : null
          );
        })}
      </div>

      <div>
        {combos.map(({ skill, soul, matchingWorkstations }) => (
          <div>
            Evolve {soul.label} with {skill.label} at{" "}
            {matchingWorkstations.map(({ ws }) => ws.label).join(", ")}
          </div>
        ))}
      </div>

      <div>TODO: Handle Evolve Via memories.</div>
    </div>
  );
}

function pluses(level: number) {
  let s = "";
  for (let i = 1; i < level; i++) s += "+";
  return s;
}
