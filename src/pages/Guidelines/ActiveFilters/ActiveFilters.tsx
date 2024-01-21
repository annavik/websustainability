import { Button } from "../../../components/Button/Button";
import { Tag } from "../../../components/Tag/Tag";
import { Filter } from "../../../models/filter";
import styles from "./ActiveFilters.module.css";

export const ActiveFilters = ({
  activeFilters,
  removeFilter,
  removeAllFilters,
}: {
  activeFilters: Filter[];
  removeFilter: (filter: Filter) => void;
  removeAllFilters: () => void;
}) => (
  <div className={styles.wrapper} style={{ gridColumn: "span 4" }}>
    {activeFilters.map((filter) => (
      <Tag
        key={`${filter.type}-${filter.value}`}
        active
        label={filter.label}
        onRemove={() => removeFilter(filter)}
      />
    ))}
    <Button
      className={styles.clearButton}
      theme="ghost"
      onClick={removeAllFilters}
    >
      Clear filters
    </Button>
  </div>
);
