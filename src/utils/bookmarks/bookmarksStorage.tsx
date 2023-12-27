const BOOKMARKS_STORAGE_KEY = "websustainability-bookmarks";

const getStoredBookmarks = (): string[] => {
  const bookmarksString = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
  if (bookmarksString?.length) {
    return JSON.parse(bookmarksString);
  }

  return [];
};

const storeBookmarks = (bookmarks: string[]) => {
  const bookmarksString = JSON.stringify(bookmarks);
  localStorage.setItem(BOOKMARKS_STORAGE_KEY, bookmarksString);
};

export { getStoredBookmarks, storeBookmarks };
