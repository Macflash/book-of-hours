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
import { FindBooksThatSpawnId } from "../boh/book";

export function LessonView({ save }: { save: Save }) {
  const [principles, setPrinciples] = React.useState<Set<Principle>>(new Set());
  const [selectedMemories, setSelectedMems] = React.useState<Set<string>>(
    new Set()
  );

  const toggleMem = (id: string) => {
    if (selectedMemories.has(id)) selectedMemories.delete(id);
    else selectedMemories.add(id);
    setSelectedMems(new Set(selectedMemories));
  };

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
      <div>
        Lessons: {[...principles].join(", ")}
        {selectedMemories.size ? ` (${selectedMemories.size} selected)` : null}
      </div>
      {/* Search */}
      <div>
        <select
          multiple
          value={[...principles]}
          onChange={(ev) => {
            setSelectedMems(new Set());
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
          toggle={toggleMem}
        />
        <MemoryList
          title="Persistent"
          memories={persistent}
          recipeMap={recipeMap}
          considerMap={considerMap}
          madeBefore={save.madeBefore}
          toggle={toggleMem}
        />
        <MemoryList
          title="Numen"
          memories={numen}
          recipeMap={recipeMap}
          considerMap={considerMap}
          madeBefore={save.madeBefore}
          toggle={toggleMem}
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
  toggle,
  selectedMemories,
}: {
  memories: Memory[];
  title?: string;
  recipeMap?: Map<string, Recipe[]>;
  considerMap?: Map<string, Item[]>;
  madeBefore?: Set<string>;
  selectedMemories?: Set<string>;
  toggle?: (id: string) => void;
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

        const readingString = FindBooksThatSpawnId(m.id)
          ?.map((i) => i.label)
          .join("\n");

        return (
          <div
            key={m.id}
            title={`${recipeString ? `Craft:\n${recipeString}\n` : ""}${
              considerString ? `Consider:\n${considerString}\n` : ""
            }${readingString ? `Read:\n${readingString}\n` : ""}`}
          >
            <label>
              <input
                type="checkbox"
                checked={selectedMemories?.has(m.id)}
                onClick={() => toggle?.(m.id)}
              />
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
              </span>
            </label>{" "}
            <PrincipleList {...m} />
          </div>
        );
      })}
    </div>
  );
}
