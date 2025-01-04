import React from "react";
import { Save } from "../boh/save";
import {
  CalculateRecipeCost,
  Cost,
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
import { SubtractAspects } from "../boh/aspects";

export function CraftingView({ save }: { save: Save }) {
  const [type, setType] = React.useState<
    "persistent" | "memory" | "item" | "tool"
  >("persistent");
  const [search, setSearch] = React.useState("");
  const [target, setTarget] = React.useState("");

  const targetRecipe = Recipes.find((r) => r.id == target);
  targetRecipe && console.log(CalculateRecipeCost(targetRecipe));

  const recipes = Recipes.filter((r) =>
    save.skills.some((s) => s.id == r.skill)
  )
    .filter(
      (r) =>
        (type == "memory" && GetItemById(r.result)?.memory) ||
        (type == "persistent" && GetItemById(r.result)?.persistent) ||
        (type == "item" && GetItemById(r.result)?.memory) ||
        (type == "tool" && GetItemById(r.result)?.tool)
    )
    .filter(
      (recipe) =>
        !search ||
        recipe.id?.includes(search) ||
        recipe.label?.includes(search) ||
        recipe.result?.includes(search)
    )
    .map((recipe) => {
      const skill = save.skills.find((s) => s.id == recipe.skill);
      if (!skill) return null;

      return { recipe, skill };
    })
    .noNulls();
  console.log("recipes", recipes);

  // could filter this to be just renewable things.
  const slotables = GetSlotablesFromSave(save).sort(
    (a, b) => Cost(b.id!) - Cost(a.id!)
  );

  const combos = recipes
    .map(({ recipe, skill }) => {
      const requiredInputs = GetRequiredRecipeInputs(recipe)
        .map((id) => GetItemById(id))
        .noNulls();

      const workstations = save.workstations
        .filter(
          (ws) =>
            // I think consider can't craft!
            ws.id != "consider" &&
            FindMatchingSlots(ws, skill).length &&
            requiredInputs.all(
              (input) => FindMatchingSlots(ws, input).length > 0
            )
        )
        .map((ws) => {
          // Some workstations provide some aspects, like "instrument".
          const neededAspects = SubtractAspects(recipe.reqs, ws.aspects);
          const something = FillSlotsByRequiredAspects(
            ws.slots,
            neededAspects,
            slotables
          );
          return something;
        })
        .noNulls();

      const principle = Principles.find((p) => recipe.reqs[p])!;
      const requiredPrinciple = recipe.reqs[principle]!;

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
    })
    .filter((x) => x.workstations.length);
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
        {combos.map(({ recipe, workstations }) => (
          <div
            style={{ border: "1px solid grey", padding: 3, margin: 3 }}
            key={recipe.id}
            onClick={() => setTarget(recipe.id)}
          >
            {recipe.label}: {ToRecipeString(recipe)}.{" "}
            {workstations[0].soul?.label}, {workstations[0].memory?.label}
          </div>
        ))}
      </div>
    </div>
  );
}
