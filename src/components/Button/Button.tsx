import classNames from "classnames";
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  href,
  style,
  theme = "outline",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
  theme?: "outline" | "ghost";
  onClick?: () => void;
}) => {
  const className = classNames(styles.button, {
    [styles.outline]: theme === "outline",
    [styles.ghost]: theme === "ghost",
  });

  if (href) {
    return (
      <a className={className} href={href} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
