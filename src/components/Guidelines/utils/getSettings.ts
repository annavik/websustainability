import { Level } from "../../../models/level";
import { Settings } from "../types";

export const getSettings = ({
  categories,
  tags,
}: {
  categories: { label: string; value: string }[];
  tags: string[];
}): Settings => [
  {
    label: "Categories",
    type: "category",
    filters: categories,
  },
  {
    label: "Tags",
    type: "tag",
    filters: tags.map((tag) => ({
      label: tag,
      value: tag,
    })),
    containerStyle: { gridTemplateColumns: "1fr 1fr 1fr" },
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
