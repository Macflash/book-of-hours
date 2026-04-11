import { RecipeData } from "../data/recipe_data";
import {
  AddAspects,
  AspectMap,
  GetAspectsWithPrefix,
  MatchesRequiredAspects,
  NoPositiveAspects,
  PositiveAspects,
  SortByAspect,
  SubtractAspect,
  SubtractAspects,
  SubtractAspectsInplace,
} from "./aspects";
import { FindBooksThatSpawnId } from "./book";
import { GetRecipeResults, RecipeResult } from "./dp_recipes";
import { GetItemsByConsiderSpawnId, GetItemById } from "./items";
import { Principles } from "./principles";
import {
  FilterRecipesBySkills,
  GetRecipesByResult,
  ToRecipeString,
} from "./recipes";
import { ParseLocationString, Save } from "./save";
import { GetSkillById, Skill } from "./skills";
import {
  GetSlotablesFromSave,
  MatchesSlot,
  Slot,
  Slotable,
  Workstation,
} from "./workstation";

let lastSave: Save | null = null;
let lastRecipeResults: RecipeResult[] = [];

export function GetCraftingHintString(
  thingOrId: string | { id?: string; location?: string },
  save?: Save,
): string {
  // This is expensive so try and avoid doing it too much.
  if (save && save != lastSave) {
    lastSave = save;
    lastRecipeResults = GetRecipeResults(save);
  }

  // YUCK!
  const id = (thingOrId as { id: string })?.id || (thingOrId as string);
  const location = ParseLocationString(
    (thingOrId as { location?: string }).location ||
      save?.items.find((item) => item.id == id)?.location,
  );

  const recipeString = lastRecipeResults
    .find(({ result }) => result.id == id)
    ?.recipes.map(({ recipe }) => ToRecipeString(recipe))
    .join("\n");

  // Remove duplicates from many items!
  const considerString = [
    ...new Set(
      GetItemsByConsiderSpawnId(id, save?.items).map((item) =>
        labelAndLocation(item),
      ),
    ),
  ].join("\n");

  const readingString = FindBooksThatSpawnId(
    id,
    save?.books.filter((b) => b.mastered),
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
