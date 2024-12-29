import { RecipeData } from "../data/recipe_data";
import { AspectMap } from "./aspects";
import { FindBooksThatSpawnId } from "./book";
import { GetItemsByConsiderSpawnId, Item } from "./crafting";
import { Principles } from "./principles";
import { ParseLocationString, Save } from "./save";
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
