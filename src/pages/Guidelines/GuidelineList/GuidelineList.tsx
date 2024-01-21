import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { GuidelineCard } from "../../../components/GuidelineCard/GuidelineCard";
import { Guideline } from "../../../models/guideline";
import styles from "./GuidelineList.module.css";

const LIMIT = 10;

export const GuidelineList = ({ guidelines }: { guidelines: Guideline[] }) => {
  const [showAll, setShowAll] = useState(false);
  const guidelinesToShow = showAll ? guidelines : guidelines.slice(0, LIMIT);

  if (guidelines.length === 0) {
    return <p className={styles.infoLabel}>No guidelines to show.</p>;
  }

  return (
    <div className={styles.wrapper}>
      {guidelinesToShow.map((guideline) => (
        <GuidelineCard key={guideline.id} guideline={guideline} />
      ))}
      {guidelines.length <= LIMIT ? null : (
        <div className={styles.showAll}>
          <Button theme="solid" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "Show all"}
          </Button>
        </div>
      )}
    </div>
  );
};
