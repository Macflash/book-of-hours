import React from "react";
import { Save, ParseSave } from "../boh/save";

export function LoadView({ setSave }: { setSave: (newSave: Save) => void }) {
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
            };
            reader.readAsText(file);
          }}
        />
      </header>
    </div>
  );
}