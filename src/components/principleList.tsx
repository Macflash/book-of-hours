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
  return (
    <span title={tooltip}>
      <span style={{ color: principlable.color }}>{principlable.label}</span>
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
