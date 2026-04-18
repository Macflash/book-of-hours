import { Save } from "../boh/save";
import "../boh/array";
import { PrincipleColor } from "../boh/principles";
import { GetItemById, Item } from "../boh/items";
import { PopulateDpMapByRecipes, RecipeSolution } from "../boh/dp_recipes";
import {
  AspectList,
  Principlable,
  Principlables,
  usePrincipleSelect,
} from "../components/principleList";
import { Section } from "../components/section";

export let whatsCraftable: { result: Item; recipes: RecipeSolution[] }[] = [];

export function CraftingView({ save }: { save: Save }) {
  const [selectedPrinciple, principleSelect] = usePrincipleSelect();

  const recipeResults = PopulateDpMapByRecipes(save);
  const results = recipeResults
    .map((r) => GetItemById(r.recipe.result)!)
    .filter((result) => !selectedPrinciple || result[selectedPrinciple])
    .unique();
  const recipeAndResults = results.map((result) => ({
    result,
    recipes: recipeResults
      .filter((r) => r.recipe.result == result.id)
      .sortDesc(({ firstSolution }) => firstSolution.length),
  }));

  const tools = recipeAndResults.filter(
    ({ result }) => result.tool && !result.device,
  );

  const inks = recipeAndResults.filter(({ result }) => result.ink);

  const beverages = recipeAndResults.filter(
    ({ result }) => result.beverage || result.intoxicating,
  );

  const memories = recipeAndResults.filter(
    ({ result }) => result.memory && !result.persistent,
  );

  const persistent = recipeAndResults.filter(({ result }) => result.persistent);

  const items = recipeAndResults
    .notIn(memories)
    .notIn(persistent)
    .notIn(beverages)
    .notIn(inks)
    .notIn(tools);

  return (
    <div>
      {principleSelect}

      <div>Crafting ({results.length})</div>
      <Section title={`Tools (${tools.length})`} startCollapsed>
        {tools.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>

      <Section title={`inks (${inks.length})`} startCollapsed>
        {inks.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>

      <Section title={`beverages (${beverages.length})`} startCollapsed>
        {beverages.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>

      <Section title={`Items (${items.length})`} startCollapsed>
        {items.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>

      <Section title={`memories (${memories.length})`} startCollapsed>
        {memories.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>

      <Section title={`persistent (${persistent.length})`} startCollapsed>
        {persistent.map(({ result, recipes }) => (
          <RecipeList
            key={result.id}
            result={result}
            recipes={recipes}
            save={save}
          />
        ))}
      </Section>
    </div>
  );
}

export function RecipeList({
  result,
  recipes,
  save,
}: {
  result: Item;
  recipes: RecipeSolution[];
  save: Save;
}) {
  return (
    <Section
      startCollapsed
      title={
        <div>
          <Principlable principlable={result} save={save} />{" "}
          <AspectList {...result} />
        </div>
      }
    >
      {recipes
        .filter(
          (r) => r.firstSolution.length == recipes[0].firstSolution.length,
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
    </Section>
  );
}
