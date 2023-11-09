import { CSSProperties } from "react";
import { Filter, FilterType } from "../../../models/filter";
import { Level } from "../../../models/level";

interface FilterPickerConfig {
  contentStyle?: CSSProperties;
  label: string;
  filters: Omit<Filter, "type">[];
  type: FilterType;
}

export const getFilterPickerConfig = ({
  categories,
  tags,
}: {
  categories: { id: string; title: string }[];
  tags: string[];
}): FilterPickerConfig[] => [
  {
    label: "Categories",
    type: "category",
    filters: categories.map((c) => ({ label: c.title, value: c.id })),
  },
  {
    label: "Tags",
    type: "tag",
    filters: tags.map((tag) => ({
      label: tag,
      value: tag,
    })),
    contentStyle: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  {
    label: "Effort",
    type: "effort",
    filters: [
      { label: "Low Effort", labelShort: "Low", value: Level.Low },
      { label: "Medium Effort", labelShort: "Medium", value: Level.Medium },
      { label: "High Effort", labelShort: "High", value: Level.High },
    ],
  },
  {
    label: "Impact",
    type: "impact",
    filters: [
      { label: "Low Impact", labelShort: "Low", value: Level.Low },
      { label: "Medium Impact", labelShort: "Medium", value: Level.Medium },
      { label: "High Impact", labelShort: "High", value: Level.High },
    ],
  },
];
