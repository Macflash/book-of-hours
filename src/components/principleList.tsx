import { Aspect, AspectMap, PositiveAspects } from "../boh/aspects";
import { Book } from "../boh/book";
import { Item } from "../boh/items";
import {
  MinusOr0,
  MixedPrincipleColor,
  Or0,
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes_hints";
import { Save } from "../boh/save";
import React from "react";

export interface IPrinciplable extends PrincipleMap {
  id?: string;
  label: string;
  color?: string;
  location?: string;
  principle?: Principle;
}

export function Principlables({
  principlables,
  principle,
  allPrinciples,
  hideIfNoPrinciple,
  aspect,
  save,
}: {
  principlables: IPrinciplable[];
  principle?: Principle;
  allPrinciples?: boolean;
  hideIfNoPrinciple?: boolean;
  aspect?: Aspect;
  save?: Save;
}) {
  return principlables
    .filter((s) => !hideIfNoPrinciple || !principle || s?.[principle])
    .map((s, i) => (
      <span key={i}>
        {i > 0 ? ", " : ""}
        <Principlable
          principlable={s}
          allPrinciples={allPrinciples}
          principle={principle}
          save={save}
          aspect={aspect}
        />
      </span>
    ));
}

export function Principlable({
  principlable,
  principle,
  allPrinciples,
  aspect,
  save,
}: {
  principlable: IPrinciplable;
  principle?: Principle;
  allPrinciples?: boolean;
  aspect?: Aspect;
  save?: Save;
}) {
  if (!principlable) return null;
  const aspectable = principlable as Item;
  const tooltip =
    ((aspectable as Book).contaminated ? `Contaminated \n` : "") +
    (save && principlable ? GetCraftingHintString(principlable, save) : "");

  let color = principlable.color || MixedPrincipleColor(principlable);
  // TODO: this is meant to cover all things that will be DESTROYED/CONSUMED when used.
  if (aspectable.fatigues && aspectable.thing) color = "antiquewhite";
  if (!aspectable.fatigues && aspectable.thing) color = "aquamarine";
  if (aspectable.memory) color = "lightblue";
  if (aspectable.persistent) color = "aquamarine";
  if (aspectable.numen) color = "chartreuse";
  if ((aspectable as Book).reading?.id?.startsWith("numen.")) {
    color = "chartreuse";
  }
  if ((aspectable as Book).contaminated) color = "darkorange";
  const alreadyHave = save?.items.filter((i) => i.id == principlable.id).length;

  return (
    <span title={tooltip}>
      <span style={{ color }}>{principlable.label}</span>
      <PrincipleValue principle={principle} principlable={principlable} />
      {allPrinciples
        ? [...Principles]
            .sort((a, b) => MinusOr0(principlable[b], principlable[a]))
            .map((p) => (
              <PrincipleValue
                key={p}
                principle={p}
                principlable={principlable}
              />
            ))
        : null}
      {aspect && principlable[aspect as Principle] ? (
        <span style={{ paddingLeft: 3 }}>({aspect})</span>
      ) : null}
      {alreadyHave ? ` (own: ${alreadyHave})` : null}
    </span>
  );
}

export function PrincipleValue({
  principle,
  principlable,
}: {
  principle?: Principle;
  principlable: PrincipleMap;
}) {
  return principle && principlable[principle] ? (
    <span style={{ color: PrincipleColor(principle), paddingLeft: 3 }}>
      ({principlable[principle]})
    </span>
  ) : null;
}

export function PrincipleList(map: PrincipleMap) {
  return (
    <>
      {Principles.filter((p) => map[p])
        .sort((a, b) => (map[b] || 0) - (map[a] || 0))
        .map((p, i, arr) =>
          PrincipleSpan({
            principle: p,
            value: map[p],
            last: i == arr.length - 1,
          }),
        )}
    </>
  );
}

export function PrincipleSpan({
  principle,
  value,
  last,
}: {
  principle: Principle;
  value?: number;
  last?: boolean;
}) {
  if (!value) return null;
  return (
    <span
      key={principle}
      style={{ fontSize: "1rem", color: PrincipleColor(principle) }}
    >
      {principle}: {value}
      {last ? "" : ", "}
    </span>
  );
}

export function AspectList(map: AspectMap) {
  const aspects = PositiveAspects(map)
    .map(({ aspect }) => aspect)
    .notIn(Principles as Aspect[]);
  // console.log("aspects", aspects);
  return (
    <span style={{ fontSize: "1rem" }}>
      <PrincipleList {...map} />{" "}
      {aspects
        .filter(
          (a) =>
            !a.startsWith("boost.") &&
            !a.startsWith("s.") &&
            a != "ability" &&
            a != (map as Item).id,
        )
        .sortDesc((x) => Or0(map[x]))
        .join(", ")}
    </span>
  );
}

export function PrincipleSelect({
  principle,
  setPrinciple,
}: {
  principle?: Principle;
  setPrinciple: (p?: Principle) => void;
}) {
  return (
    <select
      style={{
        color: PrincipleColor(principle as Principle) || "white",
        background: "#282c34",
      }}
      value={principle}
      onChange={({ target: { value } }) => {
        setPrinciple(value as Principle);
      }}
    >
      <option value="" style={{ color: "white" }}>
        All principles
      </option>
      <optgroup label="Principles" style={{ color: "white" }}>
        {Principles.map((p) => (
          <option key={p} value={p} style={{ color: PrincipleColor(p) }}>
            {p}
          </option>
        ))}
      </optgroup>
    </select>
  );
}

export function usePrincipleSelect(): [Principle | undefined, JSX.Element] {
  const [principle, setPrinciple] = React.useState<Principle>();
  const principleSelect = (
    <PrincipleSelect principle={principle} setPrinciple={setPrinciple} />
  );
  return [principle, principleSelect];
}

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
