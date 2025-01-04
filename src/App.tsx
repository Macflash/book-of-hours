import React from "react";
import "./App.css";
import { EmptySave, Save } from "./boh/save";
import { LoadView } from "./views/load";
import { AssistanceView } from "./views/assistance";
import { CraftingView } from "./views/crafting";
import { ReadingView } from "./views/reading";
import { LessonView } from "./views/lesson";
import { ContaminationView } from "./views/contamination";
import { SaveView } from "./views/save";
import { EvolveView } from "./views/evolve";
import { WorkstationView } from "./views/workstation";
import { Items } from "./boh/items";
import {
  CalculateRecipeCost,
  GetRecipesByResult,
  IsCraftable,
  Recipes,
} from "./boh/recipes";
import { Chor } from "./boh/souls";
import { AddToMap, AspectKey, DPMap, permutations } from "./boh/dp_recipes";
import {
  GetAllSlotables,
  GetSlotablesFromSave,
  MatchesSlot,
  Slotable,
} from "./boh/workstation";
import { GetAvailableMemoriesFromSave } from "./boh/memories";

type View =
  | "load"
  | "save"
  | "assistance"
  | "read"
  | "crafting"
  | "lesson"
  | "workstation"
  | "evolve"
  | "contamination";

console.log(AspectKey(Chor));

function App() {
  // const recipes = new Set(Recipes.map((r) => r.result));
  // console.log("recipes", recipes);

  // const costs = Items.map((item) => {
  //   const recipes = GetRecipesByResult(item.id);
  //   if (!recipes.length) return null;
  //   const costs = recipes.map((r) => CalculateRecipeCost(r).duration);
  //   const minCost = Math.min(...costs);
  //   return {
  //     item,
  //     minCost,
  //   };
  // })
  //   .noNulls()
  //   .sort((a, b) => a.minCost - b.minCost);
  // console.log("costs", costs);

  // console.log(
  //   "memories",
  //   costs.filter((c) => c.item.memory)
  // );

  // console.log(
  //   "craftable stuff",
  //   Items.filter((item) => IsCraftable(item.id))
  // );

  const [view, setView] = React.useState<View>("load");
  const [save, setSave] = React.useState<Save>(EmptySave());

  let body = <div>Unknown view: {view}</div>;

  if (view == "load") {
    body = (
      <LoadView
        setSave={(newSave: Save) => {
          console.log("Loaded", newSave);
          setSave(newSave);
          setView("save");
        }}
      />
    );
  }

  if (view == "save") {
    const { souls, skills } = save;
    const memories = GetAvailableMemoriesFromSave(save);

    // kind of GENERICALLY add them into the map.
    for (const soul of souls) {
      for (const skill of skills) {
        AddToMap([soul, skill]);

        // for (const memory of memories) {
        //   AddToMap([soul, skill, memory]);
        // }
      }
    }

    console.log("DPMap basic", DPMap.size + "", DPMap);

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
      const otherSlots = slots.filter((s) => s != soulSlot && s != skillSlot);
      // 31 perms, but actually soul and skill ALWAYS must be set.
      // Only 7 perms with soul and skill always set!
      const slotPerms = permutations(otherSlots);
      for (const soul of souls.filter((s) => MatchesSlot(soulSlot, s))) {
        for (const skill of skills.filter((s) => MatchesSlot(skillSlot, s))) {
          AddToMap([workstationAsSlotable, soul, skill]);

          for (const otherSlots of slotPerms) {
            // OK, just fill ALL slots.
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

    body = <SaveView save={save} />;
  }

  if (view == "assistance") {
    body = <AssistanceView save={save} />;
  }

  if (view == "crafting") {
    // This view is SUPER slow.
    body = <CraftingView save={save} />;
  }

  if (view == "read") {
    body = <ReadingView save={save} />;
  }

  if (view == "lesson") {
    body = <LessonView save={save} />;
  }

  if (view == "contamination") {
    body = <ContaminationView save={save} />;
  }

  if (view == "evolve") {
    body = <EvolveView save={save} />;
  }

  if (view == "workstation") {
    body = <WorkstationView save={save} />;
  }

  return (
    <div className="App">
      {view !== "load" ? (
        <div
          style={{
            textAlign: "left",
            position: "sticky",
            top: 0,
            backgroundColor: "#282c34",
          }}
        >
          <select
            value={view}
            onChange={(ev) => void setView(ev.target.value as View)}
          >
            <option value="load">Load</option>
            <option value="save">Save</option>
            <option value="evolve">Evolve</option>
            <option value="assistance">Assistance</option>
            <option value="crafting">Crafting</option>
            <option value="read">Read</option>
            <option value="lesson">Lessons</option>
            <option value="workstation">Workstation</option>
            <option value="contamination">Contamination</option>
          </select>
        </div>
      ) : null}
      <header className="App-header">{body}</header>
    </div>
  );
}

export default App;
