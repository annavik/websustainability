import { useState } from "react";
import { Guideline } from "../../../models/guideline";
import { Button } from "../../Button/Button";
import { GuidelineCard } from "../../GuidelineCard/GuidelineCard";
import styles from "./GuidelineList.module.css";

const LIMIT = 10;

export const GuidelineList = ({ guidelines }: { guidelines: Guideline[] }) => {
  const [showAll, setShowAll] = useState(false);

  if (guidelines.length === 0) {
    return null;
  }

  const guidelinesToShow = showAll ? guidelines : guidelines.slice(0, LIMIT);

  return (
    <>
      <div className={styles.wrapper}>
        {guidelinesToShow.map((guideline) => (
          <GuidelineCard key={guideline.id} guideline={guideline} />
        ))}
        { guidelines.length <= 10 ? <></> : <div className={styles.showAll}>
          <Button theme="solid" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "Show all"}
          </Button>
        </div> }
      </div>
    </>
  );
};
