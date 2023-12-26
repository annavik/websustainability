import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import styles from "./Accordion.module.css";

interface AccordionRootProps {
  defaultValue?: string;
  children: ReactNode;
}

const AccordionRoot = ({ defaultValue, children }: AccordionRootProps) => (
  <Accordion.Root type="single" defaultValue={defaultValue} collapsible>
    {children}
  </Accordion.Root>
);

interface AccordionItemProps {
  value: string;
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ value, title, children }: AccordionItemProps) => (
  <Accordion.Item className={styles.accordionItem} value={value}>
    <Accordion.Header>
      <Accordion.Trigger className={styles.accordionTrigger}>
        <span className={styles.accordionTriggerTitle}>{title}</span>
        <PlusIcon className={styles.plus} aria-hidden />
        <MinusIcon className={styles.minus} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className={styles.accordionContent}>
      <div className={styles.content}>{children}</div>
    </Accordion.Content>
  </Accordion.Item>
);

export { AccordionItem, AccordionRoot };
