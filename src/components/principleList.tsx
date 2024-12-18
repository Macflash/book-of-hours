import {
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "../boh/principles";

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
