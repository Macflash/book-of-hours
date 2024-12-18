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
import {
  FilterRecipesBySkills,
  GetRecipesByResult,
  Recipe,
  ToRecipeString,
} from "../boh/recipes";
import { GetSkillById } from "../boh/skills";
import { Book, FindBooksThatSpawnId } from "../boh/book";

export function LessonView({ save }: { save: Save }) {
  const [principles, setPrinciples] = React.useState<Set<Principle>>(new Set());
  const [manualSelected, setSelectedMems] = React.useState<Set<string>>(
    new Set()
  );

  const selectedMemories = new Set(manualSelected);

  const toggleMem = (id: string) => {
    if (selectedMemories.has(id)) selectedMemories.delete(id);
    else selectedMemories.add(id);
    setSelectedMems(new Set(selectedMemories));
  };

  const matchingMemories = Memories.filter((memory) => {
    for (const principle of principles) {
      if (memory[principle]) {
        if (save.availableItems.some((item) => item.id == memory.id)) {
          selectedMemories.add(memory.id);
        }
        return true;
      }
    }
    return false;
  });
  console.log("Matching", matchingMemories);

  // We should filter memories by what is actually CRAFTABLE.
  // consider: I have access to the item
  // read: I have the book (and IDEALLY, mastered it already)
  // craft: I AT LEAST have the skill (and ideally the things to make it)

  // TODO: weather??
  // TODO: TALKING TO ASSISTANTS! This is a good way to get stuff early on.
  const recipeMap = new Map<string, Recipe[]>(
    matchingMemories.map((m) => [
      m.id,
      GetRecipesByResult(
        m.id,
        FilterRecipesBySkills([...save.skills.values()])
      ),
    ])
  );
  console.log("Matching recipes", recipeMap);

  const considerMap = new Map<string, Item[]>(
    matchingMemories.map((m) => [
      m.id,
      GetItemsByConsiderSpawnId(m.id, save.availableItems),
    ])
  );
  console.log("Things to consider", considerMap);

  const bookMap = new Map<string, Book[]>(
    matchingMemories.map((m) => [
      m.id,
      FindBooksThatSpawnId(m.id, save.availableBooks),
    ])
  );

  const memoriesYouCanGet = matchingMemories.filter(
    ({ id }) =>
      selectedMemories.has(id) ||
      recipeMap.get(id)?.length ||
      considerMap.get(id)?.length ||
      bookMap.get(id)?.length
  );

  // Group memories
  const regular = memoriesYouCanGet.filter((m) => !m.persistent && !m.numen);
  const persistent = memoriesYouCanGet.filter((m) => m.persistent && !m.numen);
  const numen = memoriesYouCanGet.filter((m) => m.numen);

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
          bookMap={bookMap}
          madeBefore={save.madeBefore}
          selectedMemories={selectedMemories}
          toggle={toggleMem}
        />
        <MemoryList
          title="Persistent"
          memories={persistent}
          recipeMap={recipeMap}
          considerMap={considerMap}
          bookMap={bookMap}
          madeBefore={save.madeBefore}
          selectedMemories={selectedMemories}
          toggle={toggleMem}
        />
        <MemoryList
          title="Numen"
          memories={numen}
          recipeMap={recipeMap}
          considerMap={considerMap}
          bookMap={bookMap}
          madeBefore={save.madeBefore}
          selectedMemories={selectedMemories}
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
  bookMap,
  toggle,
  selectedMemories,
}: {
  memories: Memory[];
  title?: string;
  recipeMap?: Map<string, Recipe[]>;
  considerMap?: Map<string, Item[]>;
  bookMap?: Map<string, Book[]>;
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

        const readingString = bookMap
          ?.get(m.id)
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
