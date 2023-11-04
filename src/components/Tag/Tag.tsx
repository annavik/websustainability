import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  active,
  label,
  onRemove,
}: {
  active?: boolean;
  label: string;
  onRemove?: () => void;
}) => (
  <span className={classNames(styles.tag, { [styles.active]: active })}>
    <span>{label}</span>
    {onRemove && (
      <button className={styles.removeButton} onClick={onRemove}>
        <Cross2Icon />
      </button>
    )}
  </span>
);
