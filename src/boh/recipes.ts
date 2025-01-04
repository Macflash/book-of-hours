import { RecipeData } from "../data/recipe_data";
import {
  AddAspects,
  AspectMap,
  GetAspectsWithPrefix,
  PositiveAspects,
  SubtractAspects,
  SubtractAspectsInplace,
} from "./aspects";
import { FindBooksThatSpawnId } from "./book";
import { GetItemsByConsiderSpawnId, GetItemById } from "./items";
import { Principles } from "./principles";
import { ParseLocationString, Save } from "./save";
import { GetSkillById, Skill } from "./skills";
import { MatchesSlot, Slot, Slotable, Workstation } from "./workstation";

export interface Recipe {
  id: string;
  label: string;
  duration: number;

  skill: string;
  result: string;

  reqs: AspectMap;
}

function GenerateRecipes(): Recipe[] {
  const recipes: Recipe[] = [];
  for (const data of RecipeData) {
    const skill = GetAspectsWithPrefix(data.reqs, "s.")[0];
    const result = PositiveAspects(data.effects as AspectMap)[0];

    const recipe: Recipe = {
      ...data,
      id: data.id,
      label: data.Label!,
      duration: data.warmup,
      skill,
      result,
    };

    recipes.push(recipe);
  }
  return recipes;
}

export const Recipes = GenerateRecipes();
// Literally only recipes with 2 outputs include "larva.hungry"!!
// Can just filter that one out and make this a SINGLE field.
console.log(
  "instruemnts",
  Recipes.filter((r) => r.reqs.instrument)
);

export function GetRecipeById(id: string, recipes = Recipes): Recipe {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) throw new Error(`Couldn't find recipe id: ${id}`);
  return recipe;
}

export function GetRecipesBySkill(skill: string, recipes = Recipes): Recipe[] {
  return recipes.filter((r) => r.skill === skill);
}

export function GetRecipesByResult(
  result: string,
  recipes = Recipes
): Recipe[] {
  return recipes.filter((r) => r.result == result);
}

export function FilterRecipesBySkills(skills: Skill[], recipes = Recipes) {
  return recipes.filter((recipe) => {
    skills.some((skill) => skill.id == recipe.skill);
  });
}

export function ToRecipeString(recipe: Recipe): string {
  return `${GetSkillById(recipe.skill).label}: ${Principles.filter(
    (p) => recipe.reqs[p]
  )
    .map((p) => `${p} ${recipe.reqs[p]}`)
    .join(", ")}`;
}

function labelAndLocation({
  label,
  location,
}: {
  label: string;
  location?: string;
}): string {
  const locationString = ParseLocationString(location);
  if (locationString) label += ` (${locationString})`;
  return label;
}

export function GetCraftingHintString(
  thingOrId: string | { id?: string; location?: string },
  save?: Save
): string {
  // YUCK!
  const id = (thingOrId as { id: string })?.id || (thingOrId as string);
  const location = ParseLocationString(
    (thingOrId as { location?: string }).location ||
      save?.items.find((item) => item.id == id)?.location
  );

  const recipeString = GetRecipesByResult(
    id,
    save ? FilterRecipesBySkills(save.skills) : undefined
  )
    .map((r) => ToRecipeString(r))
    .join("\n");

  // Remove duplicates from many items!
  const considerString = [
    ...new Set(
      GetItemsByConsiderSpawnId(id, save?.items).map((item) =>
        labelAndLocation(item)
      )
    ),
  ].join("\n");

  const readingString = FindBooksThatSpawnId(
    id,
    save?.books.filter((b) => b.mastered)
  )
    .map((book) => labelAndLocation(book))
    .join("\n");

  let result = "";
  if (location) result += `Located in ${location}\n`;
  if (recipeString) result += `Craft:\n${recipeString}\n`;
  if (considerString) result += `Consider:\n${considerString}\n`;
  if (readingString) result += `Read:\n${readingString}\n`;
  return result;
}

// This doesn't..
export function GetRequiredRecipeInputs(recipe: Recipe) {
  return Object.keys(recipe)
    .filter((key) => GetItemById(key))
    .noNulls();
}

interface RecipeCost extends AspectMap {
  duration: number;
}

const recipeCostMap = new Map<string, RecipeCost>();

// lol, 2 items are literally recursive!!
export function CalculateRecipeCost(recipe: Recipe): RecipeCost {
  const existingCost = recipeCostMap.get(recipe.id);
  if (existingCost) return { ...existingCost };

  // console.log("Checking cost for " + recipe.id, recipe.duration);
  let inputCost: RecipeCost = { ...recipe.reqs, duration: recipe.duration };
  const requiredInputs = GetRequiredRecipeInputs(recipe);
  if (!requiredInputs.length) return inputCost;

  // console.log(recipe.id + " requires", requiredInputs);

  for (const input of requiredInputs) {
    const inputRecipes = GetRecipesByResult(input);
    let minRecipeCost: RecipeCost = { duration: Number.MAX_SAFE_INTEGER };
    if (!inputRecipes.length) {
      console.log("Can't make this!", input);
      break;
    }

    for (const inputRecipe of inputRecipes) {
      const cost = CalculateRecipeCost(inputRecipe);
      if (cost.duration < minRecipeCost.duration) minRecipeCost = cost;
    }
    if (minRecipeCost.duration == Number.MAX_SAFE_INTEGER)
      console.log("Couldn't make this!", input);
    AddAspects(inputCost, minRecipeCost);
  }

  recipeCostMap.set(recipe.id, inputCost);
  return inputCost;
}

// idk this might not be the best way.
export function IsCraftable(id: string) {
  return GetRecipesByResult(id).some(
    (r) => CalculateRecipeCost(r).duration < Number.MAX_SAFE_INTEGER
  );
}

export function Cost(id: string) {
  return Math.min(
    ...GetRecipesByResult(id).map((r) => CalculateRecipeCost(r).duration)
  );
}

// Get EVERY relevant combo that can make the recipe.
// Then sort them by cost and what you have available?
export function GetWaysToMakeRecipe(recipe: Recipe, save: Save) {
  const skill = save.skills.find((s) => s.id == recipe.skill);
  if (!skill) return [];

  const aspects = PositiveAspects(recipe.reqs);
  // I guess we don't need the principle really.
  const principle = Principles.find((p) => aspects.includes(p))!;

  const results: RecipeSolution[] = [];
  for (const workstation of save.workstations) {
    const remainingAspects = SubtractAspects(recipe.reqs, workstation.aspects);
    const skillSlot = workstation.slots.find((slot) =>
      MatchesSlot(slot, skill)
    );
    if (!skillSlot) continue;
    SubtractAspectsInplace(remainingAspects, skill);
  }

  return results;
}

interface RecipeSolution {
  workstation: Workstation;
  slotmap: Map<Slot, Slotable>;
}

function GetWaysToFillSlots(
  requiredAspects: AspectMap,
  slots: Slot[],
  slotables: Slotable[]
) {}
