import React from "react";
import { Save } from "../boh/save";
import {
  CalculateRecipeCost,
  GetRecipeById,
  Recipes,
  ToRecipeString,
} from "../boh/recipes";

export function CraftingView({ save }: { save: Save }) {
  const [search, setSearch] = React.useState("");
  const [target, setTarget] = React.useState("");

  target && console.log(CalculateRecipeCost(GetRecipeById(target)));

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
