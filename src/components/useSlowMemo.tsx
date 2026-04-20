import React from "react";

export function useSlowMemo<T>(memoCb: () => T, deps: any[]) {
  const [memo, setMemo] = React.useState<T | null>(null);
  React.useEffect(() => void setTimeout(() => setMemo(memoCb)), deps);
  return memo;
}
