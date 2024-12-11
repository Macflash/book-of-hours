import { RecipeData } from "../data/recipe_data";
import { PrincipleMap, Principles } from "./principles";

export interface Recipe extends PrincipleMap {
  id: string;
  label: string;
}

function GenerateRecipes(): Recipe[] {
  const recipes: Recipe[] = [];
  for (const data of RecipeData) {
    const recipe: Recipe = {
      id: data.id,
      label: data.Label,
    };
    for (const principle of Principles) {
      if (data.reqs[principle]) {
        recipe[principle] = data.reqs[principle];
      }
    }
    recipes.push(recipe);
  }
  return recipes;
}

export const Recipes = GenerateRecipes();

export function GetRecipesById(id: string): Recipe {
  const recipe = Recipes.find((r) => r.id === id);
  if (!recipe) throw new Error(`Couldn't find recipe id: ${id}`);
  return recipe;
}
