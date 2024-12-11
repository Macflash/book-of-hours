import React from "react";
import "./App.css";
import { Soul, SoulName } from "./boh/souls";
import {
  FindBestByPrinciple,
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "./boh/principles";
import { Save } from "./boh/save";
import { Assistant, Assistants } from "./boh/assistance";
import { LoadView } from "./views/load";
import { AssistanceView } from "./views/assistance";

type View = "load" | "assistance" | "read";

function App() {
  const [view, setView] = React.useState<View>("load");
  const [save, setSave] = React.useState<Save>({
    souls: [],
    skills: new Map(),
    rooms: [],
  });

  if (view == "load") {
    return (
      <LoadView
        setSave={(newSave: Save) => {
          setSave(newSave);
          setView("assistance");
        }}
      />
    );
  }

  if (view == "assistance") {
    return <AssistanceView save={save} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Souls */}
        <div>
          <div>Souls ({save.souls.length})</div>
          <div>
            {save.souls.map((soul, i) => (
              <div key={i} style={{ color: soul.color }}>
                {SoulName(soul)} {PrincipleList(soul)}
              </div>
            ))}
          </div>
        </div>
        {/* Skills */}
        <div>
          <div>Skills ({save.skills.size})</div>
          <div>
            {/* IDK why the iterator doesn't work, but this did so... moving on. */}
            {[...save.skills.values()].map((skill, i) => (
              <div key={i} style={{}}>
                {skill.label} ({skill.level}) {PrincipleList(skill)}
              </div>
            ))}
          </div>
        </div>
        {/* Assistants */}
        <div>
          <div>Assistants ({Assistants.length})</div>
          <div>
            {/* IDK why the iterator doesn't work, but this did so... moving on. */}
            {Assistants.map((assistant, i) => (
              <div key={i} style={{}}>
                {assistant.label} ({assistant.fee}¢) {PrincipleList(assistant)}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

function PrincipleList(map: PrincipleMap) {
  return (
    <>
      {Principles.filter((p) => map[p])
        .sort((a, b) => (map[b] || 0) - (map[a] || 0))
        .map((p) => (
          <span key={p} style={{ fontSize: "1rem", color: PrincipleColor(p) }}>
            {p}: {map[p]},{" "}
          </span>
        ))}
    </>
  );
}

export default App;
