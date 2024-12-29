import { AspectMap } from "../boh/aspects";
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
  save,
}: {
  principlables: IPrinciplable[];
  principle?: Principle;
  save?: Save;
}) {
  return principlables
    .filter((s) => !principle || s?.[principle])
    .map((s, i) => (
      <span key={i}>
        {i > 0 ? ", " : ""}
        <Principlable principlable={s} principle={principle} save={save} />
      </span>
    ));
}

export function Principlable({
  principlable,
  principle,
  save,
}: {
  principlable: IPrinciplable;
  principle?: Principle;
  save?: Save;
}) {
  const tooltip =
    save && principlable
      ? GetCraftingHintString(principlable, save)
      : undefined;

  let color = principlable.color;
  if (save?.items.some((i) => i.id == principlable.id)) color = "lightgreen";
  const aspectable = principlable as AspectMap;
  // TODO: this is meant to cover all things that will be DESTROYED/CONSUMED when used.
  if (aspectable.device || aspectable.beverage) color = "orange";

  return (
    <span title={tooltip}>
      <span style={{ color }}>{principlable.label}</span>
      {principle && principlable[principle] ? (
        <span style={{ color: PrincipleColor(principle), paddingLeft: 3 }}>
          ({principlable[principle]})
        </span>
      ) : null}
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
