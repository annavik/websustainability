import { Level } from "../../../models/level";
import { FilterGroup } from "./types";

export const getFilterPickerConfig = ({
  categories,
  tags,
}: {
  categories: { id: string; title: string }[];
  tags: string[];
}): FilterGroup[] => [
  {
    label: "Categories",
    type: "category",
    filters: categories.map((c) => ({ label: c.title, value: c.id })),
  },
  {
    align: screen.width > 960 ? "start" : "end",
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
    align: screen.width > 960 ? "start" : "end",
    label: "Effort",
    type: "effort",
    filters: [
      { label: "Effort Low", labelShort: "Low", value: Level.Low },
      { label: "Effort Medium", labelShort: "Medium", value: Level.Medium },
      { label: "Effort High", labelShort: "High", value: Level.High },
    ],
  },
  {
    label: "Impact",
    type: "impact",
    filters: [
      { label: "Impact Low", labelShort: "Low", value: Level.Low },
      { label: "Impact Medium", labelShort: "Medium", value: Level.Medium },
      { label: "Impact High", labelShort: "High", value: Level.High },
    ],
  },
];
