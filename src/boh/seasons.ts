export type Season = "spring" | "autumn" | "summer" | "winter" | "numa";

/** Excludes NUMA for reasons. */
export const Seasons: ReadonlyArray<Season> = [
  "spring",
  "summer",
  "autumn",
  "winter",
];
