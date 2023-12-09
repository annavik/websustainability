import { useState } from "react";
import { useGuidelines } from "../../utils/useGuidelines";
import { Button } from "../Button/Button";
import { FilterPicker } from "../FilterPicker/FilterPicker";
import { SearchInput } from "../SearchInput/SearchInput";
import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
import { GuidelineList } from "./GuidelineList/GuidelineList";
import styles from "./Guidelines.module.css";
import { getFilterPickerConfig } from "./utils/getFilterPickerConfig";
import { getInfoLabel } from "./utils/getInfoLabel";
import { useFilteredGuidelines } from "./utils/useFilteredGuidelines";
import { useFilters } from "./utils/useFilters";

export const Guidelines = () => {
  const {
    guidelines = [],
    tags = [],
    categories = [],
    isLoading,
    isError,
  } = useGuidelines();
  const filterPickerConfig = getFilterPickerConfig({ categories, tags });
  const [searchString, setSearchString] = useState("");
  const { activeFilters, addFilter, removeFilter, removeAllFilters } =
    useFilters(filterPickerConfig);
  const filteredGuidelines = useFilteredGuidelines({
    activeFilters,
    guidelines,
    searchString,
  });

  if (isError) {
    return <span>Something went wrong!</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <div className={styles.settings}>
        <SearchInput
          clearLabel="Clear search"
          placeholder="Search"
          value={searchString}
          onChange={setSearchString}
        />
        <div className={styles.filterPickers}>
          {filterPickerConfig.map(
            ({ align, contentStyle, filters, label, type }) => {
              const numActiveFilters = activeFilters.filter(
                (filter) => filter.type === type
              ).length;

              return (
                <FilterPicker
                  key={type}
                  align={align}
                  activeFilters={activeFilters}
                  contentStyle={contentStyle}
                  filters={filters.map((filter) => ({
                    ...filter,
                    type,
                  }))}
                  label={
                    numActiveFilters ? `${label} (${numActiveFilters})` : label
                  }
                  addFilter={addFilter}
                  removeFilter={removeFilter}
                />
              );
            }
          )}
        </div>
        {activeFilters.length > 0 && (
          <ActiveFilters
            activeFilters={activeFilters}
            removeFilter={removeFilter}
            removeAllFilters={removeAllFilters}
          />
        )}
      </div>

      <p className={styles.infoLabel}>
        {getInfoLabel(filteredGuidelines.length)}
      </p>

      <GuidelineList guidelines={filteredGuidelines} />

      {filteredGuidelines.length === 0 && (
        <Button
          theme="outline"
          onClick={() => {
            setSearchString("");
            removeAllFilters();
          }}
        >
          Clear settings
        </Button>
      )}
    </>
  );
};
