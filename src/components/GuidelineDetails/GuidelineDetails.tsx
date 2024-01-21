import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Guideline } from "../../models/guideline";
import { levelToEmojis } from "../../utils/levelToLabel";
import { BookmarkButton } from "../BookmarkButton/BookmarkButton";
import { LinkButton } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import styles from "./GuidelineDetails.module.css";

export const GuidelineDetails = ({ guideline }: { guideline: Guideline }) => (
  <div className={styles.wrapper}>
    <div className={styles.section}>
      <span className={styles.category}>{guideline.category.title}</span>
      <h2 className={styles.title}>{guideline.title}</h2>
      <div className={styles.actions}>
        <LinkButton to={guideline.url}>
          To guideline <ExternalLinkIcon />
        </LinkButton>
      </div>
      <p>{guideline.description}</p>
    </div>

    <div className={styles.section}>
      <h3 className={styles.title}>Success criteria</h3>
      {guideline.criteria.map((criterion, index) => {
        const id = `criterion-${index}`;

        return (
          <div key={id} className={styles.criterion}>
            <h4 id={id}>{criterion.title}</h4>
            <p>{criterion.description}</p>
          </div>
        );
      })}
    </div>

    <div className={styles.section}>
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
      <div className={styles.bookmarkButton}>
        <BookmarkButton guidelineId={guideline.id} />
      </div>
    </div>
  </div>
);
