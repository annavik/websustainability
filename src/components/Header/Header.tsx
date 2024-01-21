import { useEffect } from "react";
import { useThemePreference } from "../../utils/useThemePreference";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";
import { AboutDialog } from "../AboutDialog/AboutDialog";

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
        <img src="/globe.svg" alt="" width={96} height={96} />
        <div>
          <h1>Web Sustainability 4U</h1>
          <h2>
            An interactive version of{" "}
            <a href="https://w3c.github.io/sustyweb/">WSG 1.0</a>
          </h2>
        </div>
      </div>
    </header>
  );
};
