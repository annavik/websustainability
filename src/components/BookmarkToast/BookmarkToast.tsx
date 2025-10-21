/* eslint-disable react-hooks/exhaustive-deps */

import { CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { useBookmarks } from "../../utils/bookmarks/useBookmarks";
import { usePrevious } from "../../utils/usePrevious";
import styles from "./BookmarkToast.module.css";

const TOAST_TIMEOUT = 2000;
const TOAST_MESSAGE = "Bookmarks updated";

export const BookmarkToast = () => {
  const toastTimeoutRef = useRef<NodeJS.Timeout>();
  const [toastVisible, setToastVisible] = useState<boolean>();
  const { bookmarks } = useBookmarks();
  const previousBookmarks = usePrevious(bookmarks);

  const showToast = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastVisible(true);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, TOAST_TIMEOUT);
  };

  useEffect(() => {
    if (previousBookmarks && previousBookmarks.length !== bookmarks.length) {
      showToast();
    }
  }, [bookmarks]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  if (toastVisible === undefined) {
    return null;
  }

  return (
    <div
      className={styles.bookmarkToast}
      data-state={toastVisible ? "open" : "closed"}
      aria-hidden
    >
      <span>{TOAST_MESSAGE}</span>
      <CheckIcon />
    </div>
  );
};
