import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode } from "react";
import styles from "./Tabs.module.css";

const TabsRoot = ({
  children,
  value,
  onValueChange,
}: {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}) => (
  <Tabs.Root value={value} onValueChange={onValueChange}>
    {children}
  </Tabs.Root>
);

const TabsList = ({ children }: { children: ReactNode }) => (
  <Tabs.List className={styles.tabsList}>{children}</Tabs.List>
);

const TabsTrigger = ({ label, value }: { label: string; value: string }) => (
  <Tabs.Trigger className={styles.tabsTrigger} value={value}>
    {label}
  </Tabs.Trigger>
);

const TabsContent = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => (
  <Tabs.Content tabIndex={-1} value={value}>
    {children}
  </Tabs.Content>
);

export { TabsContent, TabsList, TabsRoot, TabsTrigger };
