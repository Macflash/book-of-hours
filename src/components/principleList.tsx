import { Aspect, AspectMap, PositiveAspects } from "../boh/aspects";
import { Item } from "../boh/items";
import {
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
  aspect,
  save,
}: {
  principlables: IPrinciplable[];
  principle?: Principle;
  aspect?: Aspect;
  save?: Save;
}) {
  return (
    principlables
      // .filter((s) => !principle || s?.[principle])
      .map((s, i) => (
        <span key={i}>
          {i > 0 ? ", " : ""}
          <Principlable
            principlable={s}
            principle={principle}
            save={save}
            aspect={aspect}
          />
        </span>
      ))
  );
}

export function Principlable({
  principlable,
  principle,
  aspect,
  save,
}: {
  principlable: IPrinciplable;
  principle?: Principle;
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
  const alreadyHave = save?.items.some((i) => i.id == principlable.id);

  return (
    <span title={tooltip}>
      <span style={{ color }}>{principlable.label}</span>
      {principle && principlable[principle] ? (
        <span style={{ color: PrincipleColor(principle), paddingLeft: 3 }}>
          ({principlable[principle]})
        </span>
      ) : null}
      {aspect && principlable[aspect as Principle] ? (
        <span style={{ paddingLeft: 3 }}>({aspect})</span>
      ) : null}
      {alreadyHave ? " (owned)" : null}
    </span>
  );
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
  const aspects = PositiveAspects(map).notIn(Principles as Aspect[]);
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
