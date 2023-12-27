import { ReactNode, createContext, useState } from "react";
import { getStoredBookmarks, storeBookmarks } from "./bookmarksStorage";

export const BookmarksContext = createContext<{
  bookmarks: string[];
  setBookmarks: (bookmarks: string[]) => void;
}>({
  bookmarks: [],
  setBookmarks: () => {},
});

export const BookmarksContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bookmarks, setBookmarks] = useState<string[]>(getStoredBookmarks());

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        setBookmarks: (bookmarks: string[]) => {
          storeBookmarks(bookmarks);
          setBookmarks(bookmarks);
        },
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
