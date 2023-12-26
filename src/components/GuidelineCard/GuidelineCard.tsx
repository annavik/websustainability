import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Guideline } from "../../models/guideline";
import { levelToEmojis } from "../../utils/levelToLabel";
import { AccordionItem, AccordionRoot } from "../Accordion/Accordion";
import { LinkButton } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import styles from "./GuidelineCard.module.css";

export const GuidelineCard = ({ guideline }: { guideline: Guideline }) => (
  <div className={styles.wrapper}>
    <span className={styles.category}>{guideline.category.title}</span>
    <h3 className={styles.title}>{guideline.title}</h3>
    <div className={styles.actions}>
      <LinkButton to={guideline.url}>
        To guideline <ExternalLinkIcon />
      </LinkButton>
    </div>
    <p className={styles.description}>{guideline.description}</p>
    <div className={styles.details}>
      <AccordionRoot>
        <AccordionItem value="success-criteria" title="Success criteria">
          {guideline.criteria.map((criterion, index) => (
            <div key={index} className={styles.criterion}>
              <h4>{criterion.title}</h4>
              <p>{criterion.description}</p>
            </div>
          ))}
        </AccordionItem>
      </AccordionRoot>
    </div>
    <div className={styles.tags}>
      <div className={styles.extra}>
        <Tag
          label={`Effort ${levelToEmojis(guideline.effort.level, "effort")}`}
          title={guideline.effort.title}
        />
        <Tag
          label={`Impact ${levelToEmojis(guideline.impact.level, "impact")}`}
          title={guideline.impact.title}
        />
      </div>
      {guideline.tags.map((tag) => (
        <Tag key={tag} label={tag} title={tag} />
      ))}
    </div>
  </div>
);
