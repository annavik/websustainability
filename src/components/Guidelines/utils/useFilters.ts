import { useState } from "react";
import { Filter } from "../../../models/filter";

export const useFilters = () => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const addFilter = (filter: Filter) => {
    setActiveFilters([...activeFilters, filter]);
  };

  const removeFilter = ({ type, value }: Filter) =>
    setActiveFilters(
      activeFilters.filter(
        (filter) => !(filter.type === type && filter.value === value)
      )
    );

  return {
    activeFilters,
    addFilter,
    removeFilter,
    removeAllFilters: () => setActiveFilters([]),
  };
};
