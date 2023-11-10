import { useState } from "react";
import { useGuidelines } from "../../utils/useGuidelines";
import { Button } from "../Button/Button";
import { FilterPicker } from "../FilterPicker/FilterPicker";
import { GuidelineCard } from "../GuidelineCard/GuidelineCard";
import { SearchInput } from "../SearchInput/SearchInput";
import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
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
  const [searchString, setSearchString] = useState("");
  const { activeFilters, addFilter, removeFilter, removeAllFilters } =
    useFilters();
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
          {getFilterPickerConfig({ categories, tags }).map(
            ({ contentStyle, filters, label, type }) => {
              const numActiveFilters = activeFilters.filter(
                (filter) => filter.type === type
              ).length;

              return (
                <FilterPicker
                  key={type}
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

      {filteredGuidelines.length ? (
        <div className={styles.guidelines}>
          {filteredGuidelines.map((guideline) => (
            <GuidelineCard key={guideline.id} guideline={guideline} />
          ))}
        </div>
      ) : (
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
