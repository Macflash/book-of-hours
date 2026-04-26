import { Save } from "../boh/save";

export function ItemView({ save }: { save: Save }) {
  const items = save.items;
  const itemAspects = items.flatMap((i) => Object.keys(i)).unique();
  return <div style={{ wordBreak: "normal" }}>{itemAspects.join(", ")}</div>;
}
