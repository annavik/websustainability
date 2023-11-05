import { useState } from "react";
import { Filter } from "../../models/filter";
import { Level } from "../../models/level";
import { useGuidelines } from "../../utils/useGuidelines";
import { FilterPicker } from "../FilterPicker/FilterPicker";
import { Table } from "../Table/Table";
import { Tag } from "../Tag/Tag";
import { TextInput } from "../TextInput/TextInput";
import styles from "./Guidelines.module.css";
import { guidelineColumns } from "./guidelineColumns";
import { useFilteredGuidelines } from "./useFilteredGuidelines";
import { useFilters } from "./useFilters";

export const filters: Filter[] = [
  { label: "Low Effort", value: Level.Low, type: "effort" },
  { label: "Medium Effort", value: Level.Medium, type: "effort" },
  { label: "High Effort", value: Level.High, type: "effort" },
  { label: "High Impact", value: Level.High, type: "impact" },
  { label: "Medium Impact", value: Level.Medium, type: "impact" },
  { label: "Low Impact", value: Level.Low, type: "impact" },
];

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
    <div>
      <div className={styles.settings}>
        <TextInput
          placeholder="Search"
          value={searchString}
          onChange={setSearchString}
        />
        <FilterPicker
          activeFilters={activeFilters}
          label="Category"
          filters={categories.map((category) => ({
            ...category,
            type: "category",
          }))}
          style={{ gridTemplateColumns: "1fr" }}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
        <FilterPicker
          activeFilters={activeFilters}
          label="Effort and Impact"
          filters={filters}
          style={{ gridTemplateRows: "1fr 1fr 1fr", gridAutoFlow: "column" }}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
        <FilterPicker
          activeFilters={activeFilters}
          label="Tags"
          filters={tags.map((tag) => ({
            label: tag,
            value: tag,
            type: "tag",
          }))}
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      </div>
      {!!activeFilters.length && (
        <div className={styles.activeFilters}>
          <span className={styles.activeFiltersLabel}>Active filters:</span>
          {activeFilters.map((filter) => (
            <Tag
              label={filter.label}
              active
              onRemove={() => removeFilter(filter)}
            />
          ))}
        </div>
      )}
      <span className={styles.info}>
        Showing {filteredGuidelines.length} guidelines:
      </span>
      <Table items={filteredGuidelines} columns={guidelineColumns} />
    </div>
  );
};
