import { AspectMap, GetAspectsWithPrefix, SortByAspect } from "../boh/aspects";
import {
  BestPrinciple,
  FindBestByPrinciple,
  MinusOr0,
  Or0,
  Principles,
  PrincipleSum,
  SumPrinciples,
} from "../boh/principles";
import { Save } from "../boh/save";
import { IPrinciplable, Principlable } from "../components/principleList";
import { Section } from "../components/section";

export function SaveView({ save }: { save: Save }) {
  console.log("Save", save);
  return (
    <div>
      Your save:
      <Section collapse title={`Best by principle`}>
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
            <div>
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
      <Section collapse title={`Souls: ${save.souls.length}`}>
        {save.souls.sortDesc(PrincipleSum).map((soul, i) => (
          <span key={i}>
            <Principlable principlable={soul} allPrinciples />
            {", "}
          </span>
        ))}
      </Section>
      <Section startCollapsed title={`Skills: ${save.skills.length}`}>
        {save.skills.sortDesc(PrincipleSum).map((s, i) => (
          <span key={i}>
            <Principlable principlable={s} allPrinciples />
            {", "}
          </span>
        ))}
      </Section>
      <div>
        Rooms unlocked:{" "}
        {save.rooms.filter((r) => !r.shrouded && !r.sealed).length}
      </div>
      <div>
        Rooms available to be opened:{" "}
        {save.rooms.filter((r) => r.shrouded).length}
      </div>
      <div>Workstations: {save.workstations.length}</div>
      <div>Items: {save.items.length}</div>
      <div>Books: {save.books.length}</div>
      <div>
        Mastered: {save.books.filter(({ mastered }) => mastered).length}
      </div>
      <div>
        Skills uncommitted:{" "}
        {save.skills.filter((s) => !s["wisdom.committed"]).length}
      </div>
      <div>
        Skills Committed:{" "}
        {save.skills.filter((s) => s["wisdom.committed"]).length}
      </div>
      <div>Filled tree slots: {save.tree.filter((n) => n.unlocked).length}</div>
      <div>Open tree slots: {save.tree.filter((n) => !n.unlocked).length}</div>
      <div>
        Fillable tree slots:{" "}
        {save.tree
          .filter((n) => !n.unlocked)
          .map((node) => ({
            node,
            skills: save.skills.filter(
              (s) =>
                Or0(s.skill) >= node.skillLevel &&
                !s["wisdom.committed"] &&
                GetAspectsWithPrefix(s, "w." + node.type).length
            ),
          }))
          .filter((x) => x.skills.length)
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
    </div>
  );
}
