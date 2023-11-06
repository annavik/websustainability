import { Guideline } from "../../models/guideline";
import { Tag } from "../Tag/Tag";
import styles from "./GuidelineCard.module.css";

export const GuidelineCard = ({ guideline }: { guideline: Guideline }) => (
  <div className={styles.wrapper}>
    <span className={styles.category}>{guideline.category.label}</span>
    <h3 className={styles.title}>{guideline.title}</h3>
    <p className={styles.description}>{guideline.description}</p>
    <div className={styles.tags}>
      {guideline.tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
    <div className={styles.extra}>
      <Tag
        label={`Effort ${[...Array(guideline.effort)]
          .map(() => "🌱")
          .join(" ")}`}
      />
      <Tag
        label={`Impact ${[...Array(guideline.impact)]
          .map(() => "🌍")
          .join(" ")}`}
      />
    </div>
  </div>
);
