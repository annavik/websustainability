import _ from "lodash";
import { useEffect, useState } from "react";
import { TableSortSettings } from "../components/Table/types";

export const useSort = <T>({ items = [] }: { items?: T[] }) => {
  const [sortedItems, setSortedItems] = useState(items);
  const [sort, setSort] = useState<TableSortSettings | undefined>();

  useEffect(() => {
    if (sort) {
      setSortedItems(_.orderBy(items, sort.field, sort.order));
    } else {
      setSortedItems(items);
    }
  }, [items, sort]);

  return { sortedItems, sort, setSort };
};
