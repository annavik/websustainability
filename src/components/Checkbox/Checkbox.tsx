import * as _Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  checked,
  id,
  label,
  onCheckedChange,
}: {
  checked: boolean;
  id: string;
  label: string;
  onCheckedChange: (checked: boolean) => void;
}) => (
  <div className={styles.wrapper}>
    <_Checkbox.Root
      className={styles.checkboxRoot}
      checked={checked}
      id={id}
      onCheckedChange={onCheckedChange}
    >
      <_Checkbox.Indicator className={styles.checkboxIndicator}>
        <CheckIcon width={16} height={16} />
      </_Checkbox.Indicator>
    </_Checkbox.Root>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);
