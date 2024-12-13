import React from "react";
import "./App.css";
import { Save } from "./boh/save";
import { LoadView } from "./views/load";
import { AssistanceView } from "./views/assistance";
import { CraftingView } from "./views/crafting";
import { ReadingView } from "./views/reading";
import { LessonView } from "./views/lesson";

type View = "load" | "assistance" | "read" | "crafting" | "lesson";

function App() {
  const [view, setView] = React.useState<View>("load");
  const [save, setSave] = React.useState<Save>({
    souls: [],
    skills: new Map(),
    rooms: [],
    workstations: [],
  });

  let body = <div>Unknown view</div>;

  if (view == "load") {
    body = (
      <LoadView
        setSave={(newSave: Save) => {
          setSave(newSave);
          setView("read");
        }}
      />
    );
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
            onChange={(ev) => {
              setView(ev.target.value as View);
            }}
          >
            <option value="assistance">Assistance</option>
            <option value="crafting">Crafting</option>
            <option value="read">Read</option>
            <option value="lesson">Lessons</option>
          </select>
        </div>
      ) : null}
      <header className="App-header">{body}</header>
    </div>
  );
}

export default App;
