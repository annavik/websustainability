import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  className: customClassName,
  href,

  theme = "outline",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  theme?: "outline" | "ghost";
  onClick?: () => void;
}) => {
  const className = classNames(styles.button, {
    [styles.outline]: theme === "outline",
    [styles.ghost]: theme === "ghost",
    ...(customClassName ? { [customClassName]: true } : {}),
  });

  if (href) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
