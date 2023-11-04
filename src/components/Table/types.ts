import { CSSProperties } from "react";

export interface TableColumn<T> {
  id: string;
  name: string;
  sortField?: string;
  styles?: CSSProperties;
  renderCell: (item: T) => JSX.Element;
}

export interface TableSortSettings {
  field: string;
  order: "asc" | "desc";
}
