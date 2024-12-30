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

type View =
  | "load"
  | "save"
  | "assistance"
  | "read"
  | "crafting"
  | "lesson"
  | "evolve"
  | "contamination";

function App() {
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
            <option value="contamination">Contamination</option>
          </select>
        </div>
      ) : null}
      <header className="App-header">{body}</header>
    </div>
  );
}

export default App;
