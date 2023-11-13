import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { IconButton } from "../IconButton/IconButton";
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
      <IconButton label="Remove tag" onClick={onRemove}>
        <Cross2Icon />
      </IconButton>
    )}
  </span>
);
