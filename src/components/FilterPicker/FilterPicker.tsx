import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { CSSProperties } from "react";
import { Filter } from "../../models/filter";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./FilterPicker.module.css";

export const FilterPicker = ({
  activeFilters,
  filters,
  label,
  style,
  addFilter,
  removeFilter,
}: {
  activeFilters: Filter[];
  filters: Filter[];
  label: string;
  style?: CSSProperties;
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
}) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={styles.popoverTrigger}>
        <span>{label}</span>
        <ChevronDownIcon />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={styles.popoverContent}
        align="end"
        sideOffset={8}
        style={style}
      >
        {filters.map((filter) => (
          <Checkbox
            checked={activeFilters.some(
              (activeFilter) =>
                filter.type === activeFilter.type &&
                filter.value === activeFilter.value
            )}
            id={`${filter.value}`}
            label={filter.label}
            onCheckedChange={(checked) => {
              if (checked) {
                addFilter(filter);
              } else {
                removeFilter(filter);
              }
            }}
          />
        ))}
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
