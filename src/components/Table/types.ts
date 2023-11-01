export interface TableColumn<T> {
  id: string;
  name: string;
  renderCell: (item: T) => JSX.Element;
}

export interface TableProps<T> {
  items?: T[];
  columns: TableColumn<T>[];
}
