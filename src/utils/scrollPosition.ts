import _ from "lodash";

const STORAGE_KEY = "scroll-position";
const ELEMENT_ID = "root";

const getScrollPosition = () => {
  const value = sessionStorage.getItem(STORAGE_KEY);
  return value ? _.toNumber(value) : undefined;
};

const setScrollPosition = (scrollPosition: number) => {
  sessionStorage.setItem(STORAGE_KEY, _.toString(scrollPosition));
};

const clearScrollPosition = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};

const storeScrollPosition = () => {
  const scrollElement = document.getElementById(ELEMENT_ID);
  if (scrollElement) {
    setScrollPosition(scrollElement.scrollTop);
  }
};

const restoreScrollPosition = () => {
  const scrollElement = document.getElementById(ELEMENT_ID);
  const scrollPosition = getScrollPosition();
  if (scrollPosition) {
    scrollElement?.scrollTo({ top: scrollPosition });

    clearScrollPosition();
  }
};

export { clearScrollPosition, restoreScrollPosition, storeScrollPosition };
