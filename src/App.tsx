import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Chor,
  Ereb,
  EvolveSoul,
  Fet,
  Health,
  Mettle,
  Phost,
  Shapt,
  Soul,
  SoulName,
  Trist,
  Wist,
} from "./boh/souls";
import { PrincipleColor, PrincipleMap, Principles } from "./boh/principles";
import { ParseSave, Save } from "./boh/save";

function App() {
  const [save, setSave] = React.useState<Save>({
    souls: [],
    skills: new Map(),
  });

  return (
    <div className="App">
      <header className="App-header">
        Load C:\Users\alexb\AppData\LocalLow\Weather Factory\Book of
        Hours\AUTOSAVE.json
        <input
          type="file"
          accept=".json"
          placeholder="C:\Users\alexb\AppData\LocalLow\Weather Factory\Book of Hours\AUTOSAVE.json"
          onChange={async (ev) => {
            const file = ev.target.files![0];
            console.log(file);
            const reader = new FileReader();
            reader.onload = (ev) => {
              const text = ev.target?.result;
              const newSave = ParseSave(JSON.parse(text?.toString() ?? ""));
              console.log("Loaded", newSave);
              setSave(newSave);
            };
            reader.readAsText(file);
          }}
        />
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
