import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};
