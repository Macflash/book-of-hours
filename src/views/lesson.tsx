import React from "react";
import {
  Memories,
  Memory,
  FavMemories,
  GetItemsByConsiderSpawnId,
  Item,
} from "../boh/crafting";
import { Principle, Principles } from "../boh/principles";
import { Save } from "../boh/save";
import { PrincipleList } from "../components/principleList";
import { GetRecipesByResult, Recipe, ToRecipeString } from "../boh/recipes";
import { GetSkillById } from "../boh/skills";

export function LessonView({ save }: { save: Save }) {
  const [principles, setPrinciples] = React.useState<Set<Principle>>(new Set());
  // search skills by name, to get their principles

  const matchingMemories = Memories.filter((memory) => {
    for (const principle of principles) {
      if (memory[principle]) return true;
    }
    return false;
  });
  console.log("Matching", matchingMemories);

  const regular = matchingMemories.filter((m) => !m.persistent && !m.numen);
  const persistent = matchingMemories.filter((m) => m.persistent && !m.numen);
  const numen = matchingMemories.filter((m) => m.numen);

  // This works great for CRAFTING
  // But memories can also come from WEATHER, CONSIDERING, and READING
  const recipeMap = new Map<string, Recipe[]>(
    matchingMemories.map((m) => [m.id, GetRecipesByResult(m.id)])
  );
  console.log("Matching recipes", recipeMap);

  const considerMap = new Map<string, Item[]>(
    matchingMemories.map((m) => [m.id, GetItemsByConsiderSpawnId(m.id)])
  );
  console.log("Things to consider", considerMap);

  return (
    <div>
      <div>Lessons: {[...principles].join(", ")}</div>
      {/* Search */}
      <div>
        <select
          multiple
          value={[...principles]}
          onChange={(ev) => {
            setPrinciples(
              new Set(
                [...ev.target.selectedOptions].map((s) => s.value as Principle)
              )
            );
          }}
        >
          {Principles.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      {/* Show memories */}
      <div>
        <MemoryList
          title="Memories"
          memories={regular}
          recipeMap={recipeMap}
          considerMap={considerMap}
          madeBefore={save.madeBefore}
        />
        <MemoryList
          title="Persistent"
          memories={persistent}
          recipeMap={recipeMap}
          considerMap={considerMap}
          madeBefore={save.madeBefore}
        />
        <MemoryList
          title="Numen"
          memories={numen}
          recipeMap={recipeMap}
          considerMap={considerMap}
          madeBefore={save.madeBefore}
        />
      </div>
    </div>
  );
}

function MemoryList({
  memories,
  title,
  recipeMap,
  considerMap,
  madeBefore,
}: {
  memories: Memory[];
  title?: string;
  recipeMap?: Map<string, Recipe[]>;
  considerMap?: Map<string, Item[]>;
  madeBefore?: Set<string>;
}) {
  if (!memories.length) return null;
  return (
    <div style={{ padding: 10 }}>
      {title ? (
        <div>
          {title} ({memories.length})
        </div>
      ) : null}
      {memories.map((m, i) => {
        const recipeString = recipeMap
          ?.get(m.id)
          ?.map((r) => ToRecipeString(r))
          .join("\n");

        const considerString = considerMap
          ?.get(m.id)
          ?.map((i) => i.label)
          .join("\n");

        return (
          <div
            key={m.id}
            title={`${recipeString ? "Craft:\n" : ""}${recipeString}\n
            ${considerString ? "Consider:\n" : ""}${considerString}`}
          >
            <span
              style={{
                color: FavMemories.some((f) => f.id == m.id)
                  ? "gold"
                  : madeBefore?.has(m.id)
                  ? "green"
                  : undefined,
              }}
            >
              {m.label}
            </span>{" "}
            <PrincipleList {...m} />
          </div>
        );
      })}
    </div>
  );
}
