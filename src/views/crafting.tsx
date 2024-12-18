import React from "react";
import { Save } from "../boh/save";
import {
  GetAllWorkstations,
  GetMatchingItems,
  MatchesAnyRequirement,
  Workstation,
} from "../boh/crafting";
import { RecipeData } from "../data/recipe_data";
import { AspectMap } from "../boh/aspects";
import { Recipes, ToRecipeString } from "../boh/recipes";
import { Principles } from "../boh/principles";

const Workstations = GetAllWorkstations();
console.log("workstations", Workstations);

export function CraftingView({ save }: { save: Save }) {
  const wsMap = new Map<string, Workstation[]>(
    Principles.map((p) => [
      p,
      Workstations.filter(
        (ws) =>
          ws.hints.includes(p) &&
          ws.slots.some(
            (slot) => slot.required["liquid"] || slot.required["ingredient"]
          )
      ),
    ])
  );
  console.log("workstations by principle", wsMap);
  const [search, setSearch] = React.useState("");
  const [target, setTarget] = React.useState("");
  return (
    <div>
      {/* Search */}
      <div>
        <input
          type="search"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
        />
      </div>
      {/* recipes */}
      <div>
        {Recipes.filter(
          (r) =>
            r.id.includes(search) ||
            r.label.includes(search) ||
            r.result_ids[0].includes(search)
        ).map((recipe) => (
          <div key={recipe.id} onClick={() => setTarget(recipe.id)}>
            {recipe.label}: {ToRecipeString(recipe)}
          </div>
        ))}
      </div>
    </div>
  );
}

// How best to represent the found recipes??
interface RecipeResult {
  id: string;
  label: string;

  waysToMakeIt: RecipeImpl[];
}

interface RecipeImpl {
  workstationId: string;
  slots: {}[];
}
