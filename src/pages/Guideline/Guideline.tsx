import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BookmarkToast } from "../../components/BookmarkToast/BookmarkToast";
import { Button } from "../../components/Button/Button";
import { GuidelineDetails } from "../../components/GuidelineDetails/GuidelineDetails";
import { getCompactId } from "../../utils/guideline";
import { useGuidelines } from "../../utils/useGuidelines";
import styles from "./Guideline.module.css";

export const Guideline = () => {
  const { id } = useParams();
  const { guidelines = [] } = useGuidelines();
  const guideline = guidelines.find((g) => getCompactId(g) === id);

  if (!guideline) {
    return <span>Guideline not found.</span>;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <GuidelinesButton />
        <GuidelineDetails guideline={guideline} />
      </div>
      <BookmarkToast />
    </>
  );
};

const GuidelinesButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      theme="ghost"
      className={styles.guidelinesButton}
      onClick={() => {
        if (location.key === "default") {
          navigate("/");
        } else {
          navigate(-1);
        }
      }}
    >
      <ChevronLeftIcon /> Guidelines
    </Button>
  );
};
