import { Filter } from "../models/filter";

export const levelToLabel = (
  filter: Filter
) => {
  if (filter.labelShort === undefined) return

  return (
    filter.labelShort +
    ` (${[...Array(filter.value)]
      .map(() => (filter.type == "effort" ? "🌱" : "🌍"))
      .join(" ")})`
  );
};
