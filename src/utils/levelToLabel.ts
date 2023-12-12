import { Filter, FilterType } from "../models/filter";

export const levelToEmojis = (value: string | number, type: FilterType) => {
  return `${[...Array(value)]
    .map(() => (type === "effort" ? "🌱" : "🌍"))
    .join(" ")}`;
};

export const levelToLabel = (filter: Filter) => {
  if (filter.labelShort === undefined) return;
  return filter.labelShort + ` (` + levelToEmojis(filter.value, filter.type) + `)`;
};
