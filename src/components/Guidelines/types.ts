import { CSSProperties } from "react";
import { Filter, FilterType } from "../../models/filter";

export type Settings = {
  containerStyle?: CSSProperties;
  label: string;
  filters: Omit<Filter, "type">[];
  type: FilterType;
}[];
