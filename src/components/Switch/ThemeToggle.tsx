import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Theme } from "../../models/theme";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = ({
  theme,
  onThemeChange,
}: {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}) => (
  <ToggleGroup.Root
    aria-label="Theme preference"
    className={styles.toggleGroup}
    type="single"
    value={theme}
    onValueChange={(value) => {
      if (value) {
        onThemeChange(value as Theme);
      }
    }}
  >
    <ToggleGroup.Item
      aria-label="Light"
      className={styles.toggleGroupItem}
      value="light"
    >
      <SunIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item
      aria-label="Dark"
      className={styles.toggleGroupItem}
      value="dark"
    >
      <MoonIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);
