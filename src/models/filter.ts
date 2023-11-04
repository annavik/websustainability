export type FilterType = "category" | "effort" | "impact" | "tag";

export interface Filter {
  label: string;
  type: FilterType;
  value: string | number;
}
