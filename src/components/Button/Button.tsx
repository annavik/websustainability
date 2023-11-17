import classNames from "classnames";
import { ReactNode, forwardRef } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  theme?: "outline" | "ghost" | "solid";
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, forwardedRef) => {
    const { children, className, theme = "outline", onClick, ...rest } = props;

    return (
      <button
        ref={forwardedRef}
        className={classNames(
          styles.button,
          {
            [styles.outline]: theme === "outline",
            [styles.ghost]: theme === "ghost",
            [styles.solid]: theme === "solid",
          },
          className
        )}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export const LinkButton = ({
  children,
  className,
  to,
  theme = "outline",
}: Omit<ButtonProps, "onClick"> & { to: string }) => (
  <a
    className={classNames(
      styles.button,
      {
        [styles.outline]: theme === "outline",
        [styles.ghost]: theme === "ghost",
        [styles.solid]: theme === "solid",
      },
      className
    )}
    href={to}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
