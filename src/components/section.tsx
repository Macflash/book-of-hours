import React, { ReactNode } from "react";
import { Principle, PrincipleColor } from "../boh/principles";

const margin = 3;
const padding = 3;

interface SectionProps {
  title?: string;
  color?: string;
  principle?: Principle;
  children?: ReactNode;
  collapse?: boolean;
  startCollapsed?: boolean;
}

export function Section({
  title,
  children,
  color,
  principle,
  startCollapsed,
  collapse = startCollapsed,
}: SectionProps) {
  const [collapsed, setCollapsed] = React.useState(startCollapsed || false);
  let border = "1px solid grey";
  if (!color && principle) color = PrincipleColor(principle);
  if (color) border = `2px solid ${color}`;
  const onClick = collapse ? () => setCollapsed(!collapsed) : undefined;
  return (
    <div style={{ border, margin, padding }}>
      {title ? (
        <div onClick={onClick} role={collapse ? "button" : undefined}>
          <div>{title}</div>
          {collapse ? <div>{}</div> : null}
        </div>
      ) : null}
      {collapsed ? null : children}
    </div>
  );
}
