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
import { GetSkillById, Skill, Skills } from "./boh/skills";

function App() {
  const souls: Soul[] = [
    // TODO: Add souls here.
    EvolveSoul(Chor),
    EvolveSoul(Ereb),

    EvolveSoul(Fet),
    Fet,

    EvolveSoul(Health),
    Health,
    Health,

    EvolveSoul(Mettle),
    EvolveSoul(Mettle),
    Mettle,

    EvolveSoul(Phost),
    Phost,
    Phost,

    EvolveSoul(Shapt),

    EvolveSoul(Trist),
    Trist,

    EvolveSoul(Wist),
    Wist,
  ];

  const skills: Skill[] = [
    GetSkillById("s.edictsmartial", 6),
    GetSkillById("s.inks.revelation", 6),
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Souls */}
        <div>
          <div>Souls</div>
          <div>
            {souls.map((soul, i) => (
              <div key={i} style={{ color: soul.color }}>
                {SoulName(soul)} {PrincipleList(soul)}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div>Skills</div>
          <div>
            {skills.map((skill, i) => (
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
