import { CSSProperties } from "react";
import styles from "./TextInput.module.css";

export const TextInput = ({
  placeholder,
  style,
  value,
  onChange,
}: {
  placeholder: string;
  style?: CSSProperties;
  value: string;
  onChange: (value: string) => void;
}) => (
  <input
    placeholder={placeholder}
    className={styles.input}
    style={style}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
