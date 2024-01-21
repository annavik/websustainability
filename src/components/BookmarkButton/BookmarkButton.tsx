import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { useBookmarks } from "../../utils/bookmarks/useBookmarks";
import { Button } from "../Button/Button";
import styles from "./BookmarkButton.module.css";

export const BookmarkButton = ({ guidelineId }: { guidelineId: string }) => {
  const { bookmarks, setBookmarks } = useBookmarks();
  const bookmarked = bookmarks.includes(guidelineId);
  const toggleBookmarked = () => {
    if (bookmarked) {
      setBookmarks(bookmarks.filter((id) => id !== guidelineId));
    } else {
      setBookmarks([...bookmarks, guidelineId]);
    }
  };

  return (
    <Button
      className={styles.bookmarkButton}
      theme="ghost"
      title={bookmarked ? "Bookmarked" : "Bookmark"}
      onClick={toggleBookmarked}
    >
      {bookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
    </Button>
  );
};
