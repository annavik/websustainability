import { Filter } from "../../../models/filter";
import { FilterPicker } from "../FilterPicker/FilterPicker";
import { Settings } from "../types";

export const FilterSettings = ({
  activeFilters,
  settings,
  addFilter,
  removeFilter,
}: {
  activeFilters: Filter[];
  settings: Settings;
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
}) => (
  <>
    {settings.map(({ containerStyle, filters, label, type }) => {
      const numActiveFilters = activeFilters.filter(
        (filter) => filter.type === type
      ).length;

      return (
        <FilterPicker
          key={type}
          activeFilters={activeFilters}
          filters={filters.map((filter) => ({
            ...filter,
            type,
          }))}
          label={numActiveFilters ? `${label} (${numActiveFilters})` : label}
          style={containerStyle}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      );
    })}
  </>
);
