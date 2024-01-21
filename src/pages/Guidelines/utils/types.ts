import { CSSProperties } from "react";
import { Filter, FilterType } from "../../../models/filter";

export interface FilterGroup {
  align?: "start" | "end";
  contentStyle?: CSSProperties;
  label: string;
  filters: Omit<Filter, "type">[];
  type: FilterType;
}
