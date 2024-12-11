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
import {
  FindBestByPrinciple,
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "./boh/principles";
import { ParseSave, Save } from "./boh/save";
import { Assistant, Assistants } from "./boh/assistance";

type View = "load" | "assistance" | "read";

function App() {
  const [view, setView] = React.useState<View>("load");
  const [save, setSave] = React.useState<Save>({
    souls: [],
    skills: new Map(),
  });

  if (view == "load") {
    return (
      <div className="App">
        <header className="App-header">
          <input
            style={{ width: 400 }}
            type="text"
            readOnly
            value="C:\Users\alexb\AppData\LocalLow\Weather Factory\Book of Hours\AUTOSAVE.json"
          />
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
                setView("assistance");
              };
              reader.readAsText(file);
            }}
          />
        </header>
      </div>
    );
  }

  if (view == "assistance") {
    type Help = Readonly<{
      principle: Principle;
      assistant: Assistant;
      soul: Soul;
      value: number;
    }>;

    const bestAssistanceMap = new Map<Principle, Help>();
    for (const principle of Principles) {
      const bestAssistant = FindBestByPrinciple(principle, Assistants);
      const bestSoul = FindBestByPrinciple(principle, save.souls);
      bestAssistanceMap.set(principle, {
        principle,
        assistant: bestAssistant,
        soul: bestSoul,
        value: (bestSoul[principle] || 0) + (bestAssistant[principle] || 0),
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>Assistance</div>
          <div>
            {[...bestAssistanceMap.values()].map(
              ({ principle, assistant, soul, value }) => (
                <div>
                  <span key={principle}>
                    <span
                      style={{
                        color: PrincipleColor(principle),
                      }}
                    >
                      {principle}: {value}{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {assistant.label}({assistant[principle]}) &
                      <span style={{ color: soul.color }}>
                        {soul.label}({soul[principle]})
                      </span>
                    </span>
                  </span>
                </div>
              )
            )}
          </div>
        </header>
      </div>
    );
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
