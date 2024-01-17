import { useContext } from "react";
import { BookmarksContext } from "./bookmarksContext";

export const useBookmarks = () => useContext(BookmarksContext);
