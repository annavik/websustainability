import { Link } from "react-router-dom";
import { Guideline } from "../../models/guideline";
import { getPath } from "../../utils/guideline";
import { levelToEmojis } from "../../utils/levelToLabel";
import { Tag } from "../Tag/Tag";
import styles from "./GuidelineCard.module.css";

export const GuidelineCard = ({ guideline }: { guideline: Guideline }) => (
  <Link to={getPath(guideline)} className={styles.card}>
    <span className={styles.category}>{guideline.category.title}</span>
    <div className={styles.title}>
      <h3>{guideline.title}</h3>
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
  </Link>
);
