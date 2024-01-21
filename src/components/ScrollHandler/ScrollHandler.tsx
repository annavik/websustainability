import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    let top = 0;

    if (location.hash) {
      const elementToScroll = document.getElementById(
        location.hash.replace("#", "")
      );

      if (elementToScroll) {
        top = elementToScroll.offsetTop;
      }
    }

    document.getElementById("root")?.scrollTo({ top });
  }, [location.pathname, location.hash]);

  return null;
};
