import { RecipeData } from "../data/recipe_data";
import { AspectMap } from "./aspects";
import { FindBooksThatSpawnId } from "./book";
import { GetItemsByConsiderSpawnId, Item } from "./crafting";
import { Principles } from "./principles";
import { Save } from "./save";
import { GetSkillById, Skill } from "./skills";

export interface Recipe extends AspectMap {
  id: string;
  label: string;
  duration: number;

  /** Skill required to make the recipe */
  skill_id: string;

  /** Ids of the result of the recipe */
  result_ids: string[];
}

function GenerateRecipes(): Recipe[] {
  const recipes: Recipe[] = [];
  for (const data of RecipeData) {
    let skill_id = "";
    for (const key of Object.keys(data.reqs)) {
      if (key.startsWith("s.")) {
        skill_id = key;
      }
    }

    const recipe: Recipe = {
      ...data.reqs,
      id: data.id,
      label: data.Label,
      skill_id,
      duration: data.warmup,
      result_ids: Object.keys(data.effects),
    };

    recipes.push(recipe);
  }
  return recipes;
}

export const Recipes = GenerateRecipes();
console.log("Recipes", Recipes);

export function GetRecipeById(id: string, recipes = Recipes): Recipe {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) throw new Error(`Couldn't find recipe id: ${id}`);
  return recipe;
}

export function GetRecipesBySkill(
  skill_id: string,
  recipes = Recipes
): Recipe[] {
  return recipes.filter((r) => r.skill_id === skill_id);
}

export function GetRecipesByResult(
  result_id: string,
  recipes = Recipes
): Recipe[] {
  return recipes.filter((r) => r.result_ids.includes(result_id));
}

export function FilterRecipesBySkills(skills: Skill[], recipes = Recipes) {
  return recipes.filter((recipe) => {
    skills.some((skill) => skill.id == recipe.skill_id);
  });
}

export function ToRecipeString(recipe: Recipe): string {
  return `${GetSkillById(recipe.skill_id).label}: ${Principles.filter(
    (p) => recipe[p]
  )
    .map((p) => `${p} ${recipe[p]}`)
    .join(", ")}`;
}

export function GetCraftingHintString(id: string, save?: Save): string {
  const recipeString = GetRecipesByResult(
    id,
    save ? FilterRecipesBySkills([...save.skills.values()]) : undefined
  )
    .map((r) => ToRecipeString(r))
    .join("\n");

  const considerString = GetItemsByConsiderSpawnId(id, save?.availableItems)
    .map(({ label }) => label)
    .join("\n");

  const readingString = FindBooksThatSpawnId(id, save?.availableBooks)
    .map(({ label }) => label)
    .join("\n");

  let result = "";
  if (recipeString) result += `Craft:\n${recipeString}\n`;
  if (considerString) result += `Consider:\n${considerString}\n`;
  if (readingString) result += `Read:\n${readingString}\n`;
  return result;
}
