export type FilterType = "category" | "effort" | "impact" | "tag";

export interface Filter {
  label: string;
  labelShort?: string;
  type: FilterType;
  value: string | number;
}
