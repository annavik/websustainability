import classNames from "classnames";
import { ClearButton } from "../ClearButton/ClearButton";
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
      <ClearButton label="Remove tag" theme="step-1" onClick={onRemove} />
    )}
  </span>
);
