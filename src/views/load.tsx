import React from "react";
import { Save, ParseSave } from "../boh/save";
// import { ExampleSaveData } from "../data/example_save_data";

var previousFile: File | null = null;
export function readFile(file = previousFile): Promise<Save> {
  console.log("Reading file", file);
  if (!file) throw new Error("No file selected");

  return new Promise<Save>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result;
      const newSave = ParseSave(JSON.parse(text?.toString() ?? ""));
      resolve(newSave);
    };
    reader.readAsText(file as Blob);
  });
}

export function LoadFile({ setSave }: { setSave: (newSave: Save) => void }) {
  return (
    <input
      style={{ color: "white" }}
      type="file"
      accept=".json"
      placeholder="%AppData%\..\LocalLow\Weather Factory\Book of Hours\AUTOSAVE.json"
      onChange={async (ev) => {
        previousFile = ev.target.files![0];
        const newSave = await readFile();
        setSave(newSave);
      }}
    />
  );
}

export function LoadView() {
  return (
    <div>
      <p style={{}}>
        Welcome!
        <br />
        To get started select a save file.
        <br /> For Steam + Windows saves are usually located here:
        <pre style={{ fontSize: 14 }}>
          %AppData%\..\LocalLow\Weather Factory\Book of Hours\AUTOSAVE.json
        </pre>
        Note: You can use any save you have, not just AUTOSAVE.
        <br />
        Your other saves should be in the same folder.
      </p>
    </div>
  );
}
