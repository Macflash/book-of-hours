import {
  Principle,
  PrincipleColor,
  PrincipleMap,
  Principles,
} from "../boh/principles";

// TODO: Make this componetized!
export function PrincipleList(map: PrincipleMap) {
  return (
    <>
      {Principles.filter((p) => map[p])
        .sort((a, b) => (map[b] || 0) - (map[a] || 0))
        .map((p) => PrincipleSpan({ principle: p, value: map[p] }))}
    </>
  );
}

export function PrincipleSpan({
  principle,
  value,
}: {
  principle: Principle;
  value?: number;
}) {
  if (!value) return null;
  return (
    <span
      key={principle}
      style={{ fontSize: "1rem", color: PrincipleColor(principle) }}
    >
      {principle}: {value},{" "}
    </span>
  );
}
