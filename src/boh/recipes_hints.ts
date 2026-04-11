import { FindBooksThatSpawnId } from "./book";
import { GetRecipeResults, RecipeResult } from "./dp_recipes";
import { GetItemsByConsiderSpawnId } from "./items";
import { ToRecipeString } from "./recipes";
import { ParseLocationString, Save } from "./save";

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
      GetItemsByConsiderSpawnId(id, save?.items)
        .filter((item) => !item.fatigues)
        .map((item) => labelAndLocation(item)),
    ),
  ].join("\n");

  const considerConsumeString = [
    ...new Set(
      GetItemsByConsiderSpawnId(id, save?.items)
        .filter((item) => item.fatigues)
        .map((item) => "(consume) " + labelAndLocation(item)),
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
  if (considerString) result += `Consider:\n${considerString}\n`;
  if (readingString) result += `Read:\n${readingString}\n`;
  if (recipeString) result += `Craft:\n${recipeString}\n`;
  // Only show consumables if you can't get it by using something that persists!
  if (!considerString && considerConsumeString)
    result += `Consider (consume):\n${considerConsumeString}\n`;
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
