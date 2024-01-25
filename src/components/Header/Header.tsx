import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useThemePreference } from "../../utils/useThemePreference";
import { AboutDialog } from "../AboutDialog/AboutDialog";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

export const Header = () => {
  const { theme, setTheme } = useThemePreference();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <AboutDialog theme={theme} />
          <ThemeToggle theme={theme} onThemeChange={setTheme} />
        </div>
        <Link to="/">
          <img
            src="/globe.svg"
            alt="websustainability.io logo."
            className={styles.logo}
            width={96}
            height={96}
          />
        </Link>
        <div>
          <h1>websustainability.io</h1>
          <h2>
            An interactive version of{" "}
            <a href="https://w3c.github.io/sustyweb/">WSG 1.0</a>
          </h2>
        </div>
      </div>
    </header>
  );
};
