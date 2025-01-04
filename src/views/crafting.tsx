import React from "react";
import { Save } from "../boh/save";
import {
  CalculateRecipeCost,
  Cost,
  GetRequiredRecipeInputs,
  GetWaysToMakeRecipe,
  Recipe,
  Recipes,
  ToRecipeString,
} from "../boh/recipes";
import {
  FindBestWorkstationByPrinciple,
  FindMatchingSlots,
  GetSlotablesFromSave,
  MatchesSlot,
  Slotable,
} from "../boh/workstation";
import "../boh/array";
import { Principles } from "../boh/principles";
import { GetItemById } from "../boh/items";
import { FillSlotsByRequiredAspects } from "../boh/crafting";
import { SubtractAspects } from "../boh/aspects";
import { permutations, AddToMap, DPMap, AspectKey } from "../boh/dp_recipes";
import { GetAvailableMemoriesFromSave } from "../boh/memories";

const recipeMap = new Map();

export function CraftingView({ save }: { save: Save }) {
  const { souls, skills } = save;
  const memories = GetAvailableMemoriesFromSave(save, true);
  const slotables = GetSlotablesFromSave(save, true); // This might not be right.

  // Go through workstations and add more detailed stufF!
  for (const ws of save.workstations) {
    const workstationAsSlotable: Slotable = {
      id: ws.id,
      label: ws.label,
      ...ws.aspects,
    };
    const { slots } = ws;
    const soulSlot = slots.find((s) => s.id == "a")!;
    const skillSlot = slots.find((s) => s.id == "s")!;
    const memorySlot = slots.find((s) => s.id == "m")!;
    const otherSlots = slots.filter(
      (s) => s != soulSlot && s != skillSlot && s != memorySlot
    );
    // 31 perms, but actually soul and skill ALWAYS must be set.
    // Only 7 perms with soul and skill always set!
    for (const soul of souls.filter((s) => MatchesSlot(soulSlot, s))) {
      for (const skill of skills.filter((s) => MatchesSlot(skillSlot, s))) {
        AddToMap([workstationAsSlotable, soul, skill]);
        for (const memory of memories.filter((m) =>
          MatchesSlot(memorySlot, m)
        )) {
          AddToMap([workstationAsSlotable, soul, skill, memory]);

          for (const otherSlot of otherSlots) {
            const matchingSlotables = slotables.filter((slotable) =>
              MatchesSlot(otherSlot, slotable)
            );
            for (const slotable1 of matchingSlotables) {
              if (
                slotable1 == memory ||
                slotable1 == skill ||
                slotable1 == soul
              )
                continue;
              AddToMap([workstationAsSlotable, soul, skill, memory, slotable1]);

              // TODO: final slot kinda?
              for (const lastSlot of otherSlots) {
                if (otherSlot == lastSlot) continue;
                if (otherSlot == otherSlots[1]) continue;
                const matchingSlotables2 = slotables.filter((slotable) =>
                  MatchesSlot(lastSlot, slotable)
                );
                for (const slotable2 of matchingSlotables2) {
                  if (
                    slotable2 == slotable1 ||
                    slotable2 == memory ||
                    slotable2 == skill ||
                    slotable2 == soul
                  )
                    continue;
                  AddToMap([
                    workstationAsSlotable,
                    soul,
                    skill,
                    memory,
                    slotable1,
                    slotable2,
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }

  console.log("DPMap advanced", DPMap.size, DPMap);

  const recipesInMap = Recipes.map((recipe) => ({
    recipe,
    slots: DPMap.get(AspectKey(recipe.reqs)),
  })).filter(({ slots }) => slots?.length);

  console.log("recipesInMap", recipesInMap);

  const recipesYouCanMake = new Set(recipesInMap.map((x) => x.recipe.result));

  return (
    <div>
      {[...recipesYouCanMake].map((r) => (
        <div>{r}</div>
      ))}
    </div>
  );
}

export function CraftingViewOLD({ save }: { save: Save }) {
  const [type, setType] = React.useState<
    "persistent" | "memory" | "item" | "tool"
  >("persistent");
  const [search, setSearch] = React.useState("");
  const [target, setTarget] = React.useState("");

  const slotables = GetSlotablesFromSave(save);

  let sum = 0;
  for (const ws of save.workstations.filter((ws) => ws.type !== "bed")) {
    let wsum = 1;
    for (const slot of ws.slots) {
      wsum *= slotables.filter((slotable) =>
        MatchesSlot(slot, slotable)
      ).length;
    }
    sum += wsum;
  }
  console.log("sum!", sum);

  const testrecipes = Recipes.filter((r) => r.result == "music.thunderskin");
  // const cheerfulRecipes = Recipes.filter((r) => r.result == "music.cheerful");
  // const tisaneRecipes = Recipes.filter((r) => r.result == "witching.tisane");

  for (const recipe of testrecipes) {
    if (recipeMap.has(recipe)) {
      continue;
    }
    console.log("getting ways to make", recipe.label);
    const waystoMake = GetWaysToMakeRecipe(recipe, save);

    console.log("checking costs!");
    for (const [workstation, slotmaps] of waystoMake) {
      for (const slotmap of slotmaps) {
        //check which is cheapest? Or just shortest?
      }
    }

    recipeMap.set(recipe, waystoMake);
    console.log(
      "Ways to make recipe",
      recipe,
      GetWaysToMakeRecipe(recipe, save)
    );
  }

  // for (const cheerfulRecipe of cheerfulRecipes) {
  //   console.log(
  //     "Ways to make cheerful",
  //     cheerfulRecipe,
  //     GetWaysToMakeRecipe(cheerfulRecipe, save)
  //   );
  // }

  // for (const fifeRecipe of fifeRecipes) {
  //   console.log(
  //     "Ways to make fife",
  //     fifeRecipe,
  //     GetWaysToMakeRecipe(fifeRecipe, save)
  //   );
  // }

  return <div>Done</div>;

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
  // const slotables = GetSlotablesFromSave(save).sort(
  //   (a, b) => Cost(b.id!) - Cost(a.id!)
  // );

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
