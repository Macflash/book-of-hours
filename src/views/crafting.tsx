import React from "react";
import { Save } from "../boh/save";
import {
  CalculateRecipeCost,
  GetRequiredRecipeInputs,
  Recipes,
  ToRecipeString,
} from "../boh/recipes";
import {
  FindBestWorkstationByPrinciple,
  FindMatchingSlots,
  GetSlotablesFromSave,
} from "../boh/workstation";
import "../boh/array";
import { Principles } from "../boh/principles";
import { GetItemById } from "../boh/items";
import { FillSlotsByRequiredAspects } from "../boh/crafting";

export function CraftingView({ save }: { save: Save }) {
  const [type, setType] = React.useState<
    "persistent" | "memory" | "item" | "tool"
  >("persistent");
  const [search, setSearch] = React.useState("");
  const [target, setTarget] = React.useState("");

  const targetRecipe = Recipes.find((r) => r.id == target);
  targetRecipe && console.log(CalculateRecipeCost(targetRecipe));

  const recipes = Recipes.filter(
    (r) =>
      (type == "memory" &&
        r.result_ids
          .map((id) => GetItemById(id))
          .some((result) => result?.memory)) ||
      (type == "persistent" &&
        r.result_ids
          .map((id) => GetItemById(id))
          .some((result) => result?.persistent)) ||
      (type == "item" &&
        r.result_ids
          .map((id) => GetItemById(id))
          .some((result) => !result?.memory)) ||
      (type == "tool" &&
        r.result_ids
          .map((id) => GetItemById(id))
          .some((result) => result?.tool))
  )
    .filter(
      (recipe) =>
        !search ||
        recipe.id?.includes(search) ||
        recipe.label?.includes(search) ||
        recipe.result_ids[0]?.includes(search)
    )
    .map((recipe) => {
      const skill = save.skills.find((s) => s.id == recipe.skill_id);
      if (!skill) return null;

      return { recipe, skill };
    })
    .noNulls();
  console.log("recipes", recipes, Recipes);

  const slotables = GetSlotablesFromSave(save);

  const combos = recipes.map(({ recipe, skill }) => {
    const requiredInputs = GetRequiredRecipeInputs(recipe)
      .map((id) => GetItemById(id))
      .noNulls();

    const workstations = save.workstations
      .filter(
        (ws) =>
          // I think consider can't craft!
          ws.id != "consider" &&
          FindMatchingSlots(ws, skill).length &&
          requiredInputs.all((input) => FindMatchingSlots(ws, input).length > 0)
      )
      .map((ws) => {
        const something = FillSlotsByRequiredAspects(
          ws.slots,
          recipe,
          slotables
        );
        return something;
      });

    const principle = Principles.find((p) => recipe[p])!;
    const requiredPrinciple = recipe[principle]!;

    // const { bestWorkstation, bestSum, bestSlotMap } =
    //   FindBestWorkstationByPrinciple(
    //     principle,
    //     workstations,
    //     slotables,
    //     requiredInputs
    //   );

    return {
      recipe,
      skill,
      requiredInputs,
      workstations,
      principle,
      // requiredPrinciple,
      // bestWorkstation,
      // bestSum,
      // bestSlotMap,
    };
  });
  // .filter((x) => x.workstations.length);
  // .filter(({ bestSum, requiredPrinciple }) => bestSum >= requiredPrinciple);
  console.log("combos", combos);

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
        <select value={type} onChange={(ev) => setType(ev.target.value as any)}>
          <option value="item">Item</option>
          <option value="tool">Tool</option>
          <option value="persistent">Persistent Memory</option>
          <option value="memory"> Memory</option>
        </select>
      </div>
      {/* recipes */}
      <div>
        {combos.map(({ recipe }) => (
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
