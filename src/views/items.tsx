import { Aspect } from "../boh/aspects";
import { Principles } from "../boh/principles";
import { Save } from "../boh/save";
import { Principlable, usePrincipleSelect } from "../components/principleList";
import { SelectRow, useStringSelect } from "../components/selects";

export function ItemView({ save }: { save: Save }) {
  const items = save.items;
  const itemAspects = items
    .flatMap((i) => Object.keys(i))
    .unique()
    .notIn(Principles);

  const [selectedPrinciple, principleSelect] = usePrincipleSelect();
  const [selectedAspect, aspectSelect] = useStringSelect(itemAspects);

  return (
    <div>
      <SelectRow selects={[principleSelect, aspectSelect]} />
      <div
        style={{
          wordBreak: "normal",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items
          .filter((i) => !selectedPrinciple || i[selectedPrinciple])
          .filter((i) => !selectedAspect || i[selectedAspect as Aspect])
          .uniqueBy("id")
          .sortDesc((i) => (selectedPrinciple ? i[selectedPrinciple] || 0 : 0))
          .map((i) => (
            <Principlable
              key={i.id}
              principlable={i}
              save={save}
              allPrinciples={!selectedPrinciple}
              principle={selectedPrinciple}
            />
          ))}
      </div>
    </div>
  );
}
