import React from "react";
import "./App.css";
import { EmptySave, Save } from "./boh/save";
import { LoadFile, LoadView } from "./views/load";
import { AssistanceView } from "./views/assistance";
import { CraftingView } from "./views/crafting";
import { ReadingView } from "./views/reading";
import { LessonView } from "./views/lesson";
import { ContaminationView } from "./views/contamination";
import { SaveView } from "./views/save";
import { EvolveView } from "./views/evolve";
import { WorkstationView } from "./views/workstation";
import { PrincipleColor, Principles } from "./boh/principles";

const seed = Math.floor(Math.random() * Principles.length);
const title = "Book of Hours helper".split(" ").map((c, i) => (
  <span
    style={{
      color: PrincipleColor(Principles[(i + seed) % Principles.length]),
    }}
  >
    {c}{" "}
  </span>
));

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

function App() {
  const [view, setView] = React.useState<View>("load");
  const [save, setSave] = React.useState<Save>(EmptySave());

  let body = <div>Unknown view: {view}</div>;

  if (view == "load") {
    body = <LoadView />;
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

  if (view == "workstation") {
    body = <WorkstationView save={save} />;
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textAlign: "left",
          position: "sticky",
          top: 0,
          backgroundColor: "#282c34",
        }}
      >
        <h1 style={{ fontSize: 16 }}>
          <a
            href="https://github.com/Macflash/book-of-hours"
            style={{ color: "grey" }}
          >
            {title}
          </a>
        </h1>
        {view !== "load" ? (
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
        ) : null}
        <LoadFile
          setSave={(newSave) => {
            if (view == "load") setView("save");
            setSave(newSave);
          }}
        />
      </div>

      <div className="App-header">{body}</div>
    </div>
  );
}

export default App;
