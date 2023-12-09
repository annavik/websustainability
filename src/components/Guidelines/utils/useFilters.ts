import { useState } from "react";
import { Filter } from "../../../models/filter";
import { FilterGroup } from "./types";

export const useFilters = (filterPickerConfig: FilterGroup[]) => {
  const { activeFilters, setActiveFilters } =
    useActiveFilters(filterPickerConfig);

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

// Help functions to handle filter state as search params
const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search)
  );

  return {
    searchParams,
    setSearchParams: (searchParams: URLSearchParams) => {
      const url = searchParams.toString().length
        ? `?${searchParams.toString()}`
        : location.pathname;
      window.history.replaceState(null, "", url);

      setSearchParams(new URLSearchParams(searchParams));
    },
  };
};

const useActiveFilters = (config: FilterGroup[]) => {
  const { searchParams, setSearchParams } = useSearchParams();

  const activeFilters = config
    .map((filterGroup) => {
      const values = searchParams.getAll(filterGroup.type);

      const filters = values
        .map((value) => {
          const config = filterGroup.filters.find(
            (f) => `${f.value}`.toLowerCase() === value.toLowerCase()
          );

          return config
            ? {
                ...config,
                type: filterGroup.type,
              }
            : undefined;
        })
        .filter((filter): filter is Filter => !!filter);

      return filters;
    })
    .flat();

  const setActiveFilters = (filters: Filter[]) => {
    config.forEach((filterGroup) => {
      searchParams.delete(filterGroup.type);
    });
    filters.forEach((filter) => {
      searchParams.append(filter.type, `${filter.value}`.toLowerCase());
    });
    setSearchParams(searchParams);
  };

  return { activeFilters, setActiveFilters };
};
