import React from "react";

export interface SelectProps<T> {
  selected: string;
  setSelected: (selected: string) => void;
  values: T[];
}

// IDK if this will work. Feels a bit TS-fu.
export function useSelect<T extends { id: string }>(
  select: (props: SelectProps<T>) => JSX.Element,
  values: T[],
): [T | undefined, JSX.Element] {
  const [selected, setSelected] = React.useState<string>("");

  return [
    values.find(({ id }) => id == selected),
    select({ selected, setSelected, values }),
  ];
}

export function SelectRow({ selects }: { selects: JSX.Element[] }) {
  return <div style={{ display: "flex" }}>{selects}</div>;
}

function SimpleSelect({ selected, setSelected, values }: SelectProps<string>) {
  return (
    <select
      style={{
        color: "white",
        background: "#282c34",
      }}
      value={selected}
      onChange={({ target: { value } }) => {
        setSelected(value);
      }}
    >
      <option value="" style={{ color: "white" }}>
        Any
      </option>
      {values.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}

export function useStringSelect(values: string[]): [string, JSX.Element] {
  const [selected, setSelected] = React.useState<string>("");
  return [
    selected,
    <SimpleSelect
      selected={selected}
      values={values}
      setSelected={setSelected}
    />,
  ];
}
