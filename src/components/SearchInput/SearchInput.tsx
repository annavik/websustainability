import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { CSSProperties } from "react";
import { IconButton } from "../IconButton/IconButton";
import styles from "./SearchInput.module.css";

export const SearchInput = ({
  clearLabel,
  placeholder,
  style,
  value,
  onChange,
}: {
  clearLabel: string;
  placeholder: string;
  style?: CSSProperties;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className={styles.wrapper} style={style}>
    <input
      placeholder={placeholder}
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <div className={styles.searchIconWrapper}>
      <MagnifyingGlassIcon />
    </div>
    {value.length > 0 && (
      <div className={styles.clearButtonWrapper}>
        <IconButton
          label={clearLabel}
          onClick={() => onChange("")}
          type="reset"
        >
          <Cross2Icon />
        </IconButton>
      </div>
    )}
  </div>
);
