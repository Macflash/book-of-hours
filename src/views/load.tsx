import React from "react";
import { Save, ParseSave } from "../boh/save";
// import { ExampleSaveData } from "../data/example_save_data";

export function LoadView({ setSave }: { setSave: (newSave: Save) => void }) {
  // React.useEffect(() => setSave(ParseSave(ExampleSaveData as any)));
  return (
    <div>
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
            setSave(newSave);
          };
          reader.readAsText(file);
        }}
      />
    </div>
  );
}
