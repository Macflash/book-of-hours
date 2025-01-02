import React from "react";
import { Principle, Principles } from "../boh/principles";
import { Save } from "../boh/save";
import { PrincipleList } from "../components/principleList";
import {
  FilterRecipesBySkills,
  GetCraftingHintString,
  GetRecipesByResult,
  Recipe,
} from "../boh/recipes";
import { Book, FindBooksThatSpawnId } from "../boh/book";
import { Item, GetItemsByConsiderSpawnId } from "../boh/items";
import { Memories, Memory, FavMemories } from "../boh/memories";

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
        if (save.items.some((item) => item.id == memory.id)) {
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
  // TODO: TALKING TO ASSISTANTS! This is a good way to get stuff early
  const recipeMap = new Map<string, Recipe[]>(
    matchingMemories.map((m) => [
      m.id,
      GetRecipesByResult(m.id, FilterRecipesBySkills(save.skills)),
    ])
  );
  console.log("Matching recipes", recipeMap);

  const considerMap = new Map<string, Item[]>(
    matchingMemories.map((m) => [
      m.id,
      GetItemsByConsiderSpawnId(m.id, save.items),
    ])
  );
  console.log("Things to consider", considerMap);

  const bookMap = new Map<string, Book[]>(
    matchingMemories.map((m) => [m.id, FindBooksThatSpawnId(m.id, save.books)])
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
          save={save}
          madeBefore={save.madeBefore}
          selectedMemories={selectedMemories}
          toggle={toggleMem}
        />
        <MemoryList
          title="Persistent"
          memories={persistent}
          save={save}
          madeBefore={save.madeBefore}
          selectedMemories={selectedMemories}
          toggle={toggleMem}
        />
        <MemoryList
          title="Numen"
          memories={numen}
          save={save}
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
  madeBefore,
  toggle,
  selectedMemories,
  save,
}: {
  memories: Memory[];
  title?: string;
  madeBefore?: Set<string>;
  selectedMemories?: Set<string>;
  toggle?: (id: string) => void;
  save?: Save;
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
        return (
          <div key={m.id} title={GetCraftingHintString(m, save)}>
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
