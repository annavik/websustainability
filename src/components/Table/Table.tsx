import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useSort } from "../../utils/useSort";
import styles from "./Table.module.css";
import { TableColumn } from "./types";

interface TableProps<T> {
  items?: T[];
  columns: TableColumn<T>[];
}

export const Table = <T extends { id: string }>({
  items = [],
  columns,
}: TableProps<T>) => {
  const { sortedItems, sort, setSort } = useSort({
    items,
  });

  const onHeaderClick = (column: TableColumn<T>) => {
    if (!column.sortField) {
      return;
    }

    if (column.sortField !== sort?.field) {
      setSort({ field: column.sortField, order: "asc" });
    } else {
      if (sort.order === "asc") {
        setSort({
          field: column.sortField,
          order: "desc",
        });
      } else {
        setSort(undefined);
      }
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) =>
            column.sortField ? (
              <th
                key={column.id}
                tabIndex={0}
                className={classNames(styles.tableHeader, styles.sortable)}
                onClick={() => onHeaderClick(column)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
              >
                <div className={styles.tableHeaderContent}>
                  <span>{column.name}</span>
                  <div className={styles.sortIconWrapper}>
                    {sort?.field === column.sortField &&
                      (sort?.order === "asc" ? (
                        <ChevronDownIcon />
                      ) : (
                        <ChevronUpIcon />
                      ))}
                  </div>
                </div>
              </th>
            ) : (
              <th key={column.id} className={styles.tableHeader}>
                {column.name}
              </th>
            )
          )}
          <th aria-hidden="true" style={{ width: "100%" }} />
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item) => (
          <tr key={item.id}>
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
};
