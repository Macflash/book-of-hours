import React from "react";
import { Save } from "../boh/save";
import {
  CalculateRecipeCost,
  GetRequiredRecipeInputs,
  GetWaysToMakeRecipe,
  Recipes,
  ToRecipeString,
} from "../boh/recipes";
import {
  FindMatchingSlots,
  GetSlotablesFromSave,
  MatchesSlot,
  Slotable,
} from "../boh/workstation";
import "../boh/array";
import { PrincipleColor, Principles } from "../boh/principles";
import { GetItemById } from "../boh/items";
import { FillSlotsByRequiredAspects } from "../boh/crafting";
import { SubtractAspects } from "../boh/aspects";
import {
  AddToMap,
  DPMap,
  AspectKey,
  PopulateDPMapFromSave,
  PopulateDpMapByRecipes,
} from "../boh/dp_recipes";
import { GetAvailableMemoriesFromSave } from "../boh/memories";
import {
  AspectList,
  Principlable,
  Principlables,
  PrincipleList,
  PrincipleSpan,
} from "../components/principleList";

const recipeMap = new Map();
export function CraftingView({ save }: { save: Save }) {
  const items = save.items.filter((i) => !i.memory && !i.fatigues);
  const memories = GetAvailableMemoriesFromSave(save, true);
  const otherStuff = [...items, ...memories];

  const recipeResult = PopulateDpMapByRecipes(save);
  const resultMap = recipeResult.map((r) => r.recipe.result).unique();

  return (
    <div>
      {resultMap.map((resultId) => {
        const result = GetItemById(resultId)!;
        const recipes = recipeResult
          .filter((r) => r.recipe.result == resultId)
          .sort((a, b) => a.firstSolution.length - b.firstSolution.length);
        return (
          <div
            key={resultId}
            style={{ border: "1px solid grey", padding: 3, margin: 3 }}
          >
            <div>
              <Principlable principlable={result} save={save} />{" "}
              <AspectList {...result} />
            </div>
            <div>
              {recipes
                .filter(
                  (r) =>
                    r.firstSolution.length == recipes[0].firstSolution.length
                )
                .map((r) => {
                  return (
                    <div
                      key={r.recipe.id}
                      style={{
                        border: `2px solid ${PrincipleColor(r.principle)}`,
                        padding: 3,
                        margin: 3,
                      }}
                    >
                      <div>
                        <AspectList {...r.recipe.reqs} />
                      </div>
                      <Principlables
                        aspect={r.otherReq}
                        principlables={r.firstSolution}
                        principle={r.principle}
                        save={save}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
