import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementToScroll = document.getElementById(
        location.hash.replace("#", "")
      );

      if (elementToScroll) {
        elementToScroll.scrollIntoView();
        return;
      }
    }

    document.getElementById("root")?.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
};
