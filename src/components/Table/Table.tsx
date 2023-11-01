import styles from "./Table.module.css";
import { TableProps } from "./types";

export const Table = <T extends { Id: string }>({
  items = [],
  columns,
}: TableProps<T>) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id} className={styles.tableHeader}>
            <span>{column.name}</span>
          </th>
        ))}
        <th aria-hidden="true" style={{ width: "100%" }} />
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.Id}>
          {columns.map((column) => (
            <td key={column.id} className={styles.tableData}>
              {column.renderCell(item)}
            </td>
          ))}
          <td aria-hidden="true" />
        </tr>
      ))}
    </tbody>
  </table>
);
