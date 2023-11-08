import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { CSSProperties } from "react";
import { Filter } from "../../models/filter";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./FilterPicker.module.css";

export const FilterPicker = ({
  activeFilters,
  contentStyle,
  filters,
  label,
  addFilter,
  removeFilter,
}: {
  activeFilters: Filter[];
  contentStyle?: CSSProperties;
  filters: Filter[];
  label: string;
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
}) => (
  <Popover.Root>
    <Popover.Trigger className={styles.popoverTrigger}>
      <span>{label}</span>
      <ChevronDownIcon width={16} height={16} />
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className={styles.popoverContent}
        align="start"
        sideOffset={8}
        style={contentStyle}
      >
        {filters.map((filter) => (
          <Checkbox
            key={filter.value}
            checked={activeFilters.some(
              (activeFilter) =>
                filter.type === activeFilter.type &&
                filter.value === activeFilter.value
            )}
            id={`${filter.value}`}
            label={filter.labelShort ?? filter.label}
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
