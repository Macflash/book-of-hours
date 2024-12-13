import React from "react";
import { Memories, Memory, FavMemories } from "../boh/crafting";
import { Principle, Principles } from "../boh/principles";
import { Save } from "../boh/save";
import { PrincipleList } from "../components/principleList";

export function LessonView({ save }: { save: Save }) {
  const [principles, setPrinciples] = React.useState<Set<Principle>>(new Set());
  // search skills by name, to get their principles

  const matchingMemories = Memories.filter((memory) => {
    for (const principle of principles) {
      if (memory[principle]) return true;
    }
    return false;
  });
  console.log(matchingMemories);

  const regular = matchingMemories.filter((m) => !m.persistent && !m.numen);
  const persistent = matchingMemories.filter((m) => m.persistent && !m.numen);
  const numen = matchingMemories.filter((m) => m.numen);

  return (
    <div>
      <div>Lessons</div>
      {/* Search */}
      <div>
        <select
          multiple
          onChange={(ev) => {
            setPrinciples(
              new Set(
                [...ev.target.selectedOptions].map((s) => s.value as Principle)
              )
            );
          }}
        >
          {Principles.map((p) => (
            <option key={p} value={p} selected={principles.has(p)}>
              {p}
            </option>
          ))}
        </select>
      </div>
      {/* Show memories */}
      <div>
        <MemoryList title="Memories" memories={regular} />
        <MemoryList title="Persistent" memories={persistent} />
        <MemoryList title="Numen" memories={numen} />
      </div>
    </div>
  );
}

function MemoryList({
  memories,
  title,
}: {
  memories: Memory[];
  title?: string;
}) {
  if (!memories.length) return null;
  return (
    <div style={{ padding: 10 }}>
      {title ? (
        <div>
          {title} ({memories.length})
        </div>
      ) : null}
      {memories.map((m, i) => (
        <div key={m.id}>
          <span
            style={{
              color: FavMemories.some((f) => f.id == m.id) ? "gold" : undefined,
            }}
          >
            {m.label}
          </span>{" "}
          <PrincipleList {...m} />
        </div>
      ))}
    </div>
  );
}
