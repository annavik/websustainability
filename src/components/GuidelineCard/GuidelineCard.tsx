import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Guideline } from "../../models/guideline";
import { LinkButton } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { levelToEmojis } from "../../utils/levelToLabel";
import styles from "./GuidelineCard.module.css";

export const GuidelineCard = ({ guideline }: { guideline: Guideline }) => (
  <div className={styles.wrapper}>
    <span className={styles.category}>{guideline.category.title}</span>
    <div className={styles.title}>
      <h3>{guideline.title}</h3>
    </div>
    <div className={styles.actions}>
      <LinkButton to={guideline.url}>
        To guideline <ExternalLinkIcon />
      </LinkButton>
    </div>
    <p className={styles.description}>{guideline.description}</p>
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
