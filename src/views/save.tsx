import { GetAspectsWithPrefix } from "../boh/aspects";
import {
  FindBestByPrinciple,
  Or0,
  PrincipleColor,
  Principles,
  PrincipleSum,
  SumPrinciples,
} from "../boh/principles";
import { Rooms } from "../boh/rooms";
import { Save } from "../boh/save";
import { commited } from "../boh/skills";
import { Principlable } from "../components/principleList";
import { Section } from "../components/section";

export function SaveView({ save }: { save: Save }) {
  // Does this still work?
  const commitableSkills = save.tree
    .filter((n) => !n.unlocked)
    .map((node) => ({
      node,
      skills: save.skills.filter(
        (s) =>
          Or0(s.skill) >= node.skillLevel &&
          !s["wisdom.committed"] &&
          GetAspectsWithPrefix(s, "w." + node.type).length,
      ),
    }))
    .filter((x) => x.skills.length);

  const openRooms = save.rooms.filter((r) => !r.shrouded && !r.sealed).length;
  const roomPercent = Math.floor((100 * openRooms) / Rooms.length);

  return (
    <div>
      Loaded!
      <div style={{ fontSize: 16 }}>
        Use the other views above to help with reading, unlocking rooms,
        crafting, etc.
      </div>
      <Section startCollapsed title={`Best by principle`}>
        {Principles.map((principle) => ({
          principle,
          soul: FindBestByPrinciple(principle, save.souls),
          skill: FindBestByPrinciple(principle, save.skills),
        }))
          .map((data) => ({
            ...data,
            sum: SumPrinciples(data.principle, data.skill, data.soul),
          }))
          .sort((a, b) => b.sum - a.sum)
          .map(({ principle, soul, skill, sum }) => (
            <div key={principle} style={{ color: PrincipleColor(principle) }}>
              {principle} ({sum}):{" "}
              {skill ? (
                <Principlable principle={principle} principlable={skill} />
              ) : null}{" "}
              {soul ? (
                <Principlable principle={principle} principlable={soul} />
              ) : null}{" "}
            </div>
          ))}
      </Section>
      <Section
        collapse
        startCollapsed={!commitableSkills.length}
        title={`Skill tree (${save.skills.filter(commited).length} commited, ${commitableSkills.length} to commit)`}
      >
        <div>
          Skills uncommitted:{" "}
          {save.skills.filter((s) => !s["wisdom.committed"]).length}
        </div>
        <div>Skills Committed: {save.skills.filter(commited).length}</div>
        <div>
          Filled tree slots: {save.tree.filter((n) => n.unlocked).length}
        </div>
        <div>
          Open tree slots: {save.tree.filter((n) => !n.unlocked).length}
        </div>
        <div>
          Fillable tree slots:{" "}
          {commitableSkills
            .map(({ node, skills }) => (
              <div key={node.id}>
                {node.id}:{" "}
                {skills
                  .sort((a, b) => Or0(a.skill) - Or0(b.skill))
                  .map((s) => `${s.label} (${s.skill})`)
                  .join(", ")}
              </div>
            ))
            .ifEmpty("No commitable skills")}
        </div>
      </Section>
      <Section startCollapsed title={`House (${roomPercent}% unlocked)`}>
        <div>
          Rooms unlocked:{" "}
          {save.rooms.filter((r) => !r.shrouded && !r.sealed).length} (
          {Math.floor(
            (100 * save.rooms.filter((r) => !r.shrouded && !r.sealed).length) /
              Rooms.length,
          )}
          %)
        </div>
        <div>
          Rooms available to be opened:{" "}
          {save.rooms.filter((r) => r.shrouded).length}
        </div>
        <div>Workstations: {save.workstations.length}</div>
        <div>Items in your house: {save.items.length}</div>
        <div>Books in your house: {save.books.length}</div>
        <div>
          Books Mastered: {save.books.filter(({ mastered }) => mastered).length}
        </div>
      </Section>
      <Section startCollapsed title={`Souls (${save.souls.length})`}>
        {save.souls.sortDesc(PrincipleSum).map((soul, i) => (
          <span key={i}>
            <Principlable principlable={soul} allPrinciples />
            {", "}
          </span>
        ))}
      </Section>
      <Section startCollapsed title={`Skills (${save.skills.length} learned)`}>
        {save.skills.sortDesc(PrincipleSum).map((s, i) => (
          <span key={i}>
            <Principlable principlable={s} allPrinciples />
            {", "}
          </span>
        ))}
      </Section>
      <Section startCollapsed title={`Items (${save.items.length} in house)`}>
        {save.items
          .uniqueBy("id")
          .sortDesc(PrincipleSum)
          .map((s, i) => (
            <span key={i}>
              <Principlable principlable={s} allPrinciples />
              {", "}
            </span>
          ))}
      </Section>
    </div>
  );
}
