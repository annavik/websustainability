import styles from "./TextInput.module.css";

export const TextInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <input
    placeholder={placeholder}
    className={styles.input}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
