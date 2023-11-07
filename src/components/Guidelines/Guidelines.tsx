import { useState } from "react";
import { useGuidelines } from "../../utils/useGuidelines";
import { GuidelineCard } from "../Guideline/GuidelineCard";
import { Tag } from "../Tag/Tag";
import { TextInput } from "../TextInput/TextInput";
import { FilterSettings } from "./FilterSettings/FilterSettings";
import styles from "./Guidelines.module.css";
import { getSettings } from "./utils/getSettings";
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
  const { activeFilters, addFilter, removeFilter } = useFilters();
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
        <TextInput
          placeholder="Search"
          style={{ gridColumn: "span 4" }}
          value={searchString}
          onChange={setSearchString}
        />
        <FilterSettings
          activeFilters={activeFilters}
          addFilter={addFilter}
          settings={getSettings({ categories, tags })}
          removeFilter={removeFilter}
        />
        {activeFilters.length > 0 && (
          <div
            className={styles.activeFilters}
            style={{ gridColumn: "span 4" }}
          >
            <span className={styles.activeFiltersLabel}>Active filters:</span>
            {activeFilters.map((filter) => (
              <Tag
                key={filter.value}
                label={filter.label}
                active
                onRemove={() => removeFilter(filter)}
              />
            ))}
          </div>
        )}
      </div>
      <span className={styles.info}>
        Showing {filteredGuidelines.length} guidelines:
      </span>
      <div className={styles.guidelines}>
        {filteredGuidelines.map((guideline) => (
          <GuidelineCard key={guideline.id} guideline={guideline} />
        ))}
      </div>
    </>
  );
};
