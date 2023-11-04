export type FilterType = "tags";

export interface Filter {
  label: string;
  type: FilterType;
  value: string;
}
