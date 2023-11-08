import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import styles from "./ClearButton.module.css";

export const ClearButton = ({
  label,
  theme = "step-12",
  onClick,
}: {
  label: string;
  theme?: "step-1" | "step-12";
  onClick: () => void;
}) => (
  <button
    aria-label={label}
    className={classNames(styles.clearButton, {
      [styles.step1]: theme === "step-1",
      [styles.step12]: theme === "step-12",
    })}
    title={label}
    type="reset"
    onClick={onClick}
  >
    <Cross2Icon width={16} height={16} />
  </button>
);
