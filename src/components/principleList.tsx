import { Aspect, AspectMap, PositiveAspects } from "../boh/aspects";
import { Book } from "../boh/book";
import { Item } from "../boh/items";
import {
  AddOr0,
  MinusOr0,
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "../boh/principles";
import { GetCraftingHintString } from "../boh/recipes";
import { Save } from "../boh/save";

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
  const tooltip =
    save && principlable
      ? GetCraftingHintString(principlable, save)
      : undefined;

  let color = principlable.color;
  const aspectable = principlable as Item;
  // TODO: this is meant to cover all things that will be DESTROYED/CONSUMED when used.
  if (aspectable.fatigues && aspectable.thing) color = "antiquewhite";
  if (!aspectable.fatigues && aspectable.thing) color = "aquamarine";
  if (aspectable.memory) color = "lightblue";
  if (aspectable.persistent) color = "aquamarine";
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
          })
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
  return (
    <span style={{ fontSize: "1rem" }}>
      <PrincipleList {...map} />{" "}
      {aspects
        .filter(
          (a) =>
            !a.startsWith("boost.") &&
            !a.startsWith("s.") &&
            a != "ability" &&
            a != (map as Item).id
        )
        .sort((a, b) => (map[b] || 0) - (map[a] || 0))
        .map((p, i, arr) => p)
        .join(", ")}
    </span>
  );
}
