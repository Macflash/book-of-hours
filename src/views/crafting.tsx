import React from "react";
import { Save } from "../boh/save";
import {
  GetAllWorkstations,
  GetMatchingItems,
  MatchesAnyRequirement,
} from "../boh/crafting";
import { RecipeData } from "../data/recipe_data";
import { AspectMap } from "../boh/aspects";
import { Recipes, ToRecipeString } from "../boh/recipes";

const Workstations = GetAllWorkstations();
console.log("workstations", Workstations);

export function CraftingView({ save }: { save: Save }) {
  const [search, setSearch] = React.useState("");
  const craftableRecipes = CheckAllRecipes(save);
  console.log(craftableRecipes);
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
          (r) => r.id.includes(search) || r.label.includes(search)
        )
          .map((r) => r.label + ": " + ToRecipeString(r))
          .map((s) => (
            <div>{s}</div>
          ))}
      </div>
    </div>
  );
}

function CheckAllRecipes(save: Save) {
  console.log("starting recipes...");
  const start = Date.now();
  for (const data of RecipeData) {
    // This is so slow. We maybe just want to stick to a specific RECIPE, or ASPECT.
    break;
    // These are the reqs that ALL must be met.
    const recipeReqs: AspectMap = data.reqs;
    // console.log(data.Label, recipeReqs);

    let requiredSkill = "";
    for (const key in data.reqs) {
      if (key.startsWith("s.")) {
        requiredSkill = key;
        break;
      }
    }
    if (!requiredSkill) console.log("no skill recipe?", data);
    if (!save.skills.has(requiredSkill)) {
      //   console.log("you don't have the skill for this recipe");
      continue;
    }

    for (const workstation of Workstations) {
      for (const slot of workstation.slots) {
        const items = GetMatchingItems(slot.required, slot.essential);
        if (slot.essential?.ability) {
          // TODO: abilities need to  come from saves!
          const souls = save.souls.filter((soul) =>
            MatchesAnyRequirement(slot.required, soul)
          );
          //   console.log("matching souls", souls);
        }
        if (slot.essential?.skill) {
          // Also: Skills!
          const skills = save.skills
            .values()
            .map((skill) => MatchesAnyRequirement(slot.required, skill));
        }
      }
    }
  }
  console.log("Done with recipes", Date.now() - start);
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
