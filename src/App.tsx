import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import styles from "./App.module.css";
import { Guidelines } from "./components/Guidelines/Guidelines";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import globe from "./globe.svg";
import { useThemePreference } from "./utils/useThemePreference";

const queryClient = new QueryClient();

function App() {
  const { theme, setTheme } = useThemePreference();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <header className={styles.header}>
        <div className={styles.content}>
          <img src={globe} alt="" />
          <div>
            <h1>Web Sustainability Guidelines</h1>
            <h2>
              An interactive version of{" "}
              <a href="https://w3c.github.io/sustyweb/">WSG 1.0</a>
            </h2>
          </div>
        </div>
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle theme={theme} onThemeChange={setTheme} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <Guidelines />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
