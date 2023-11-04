import { CSSProperties } from "react";

export interface TableColumn<T> {
  id: string;
  name: string;
  sortField?: string;
  style?: CSSProperties;
  renderCell: (item: T) => JSX.Element;
}

export interface TableSortSettings {
  field: string;
  order: "asc" | "desc";
}
