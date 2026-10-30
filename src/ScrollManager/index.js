import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map();

export const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousLocation = useRef(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!previousLocation.current) {
      previousLocation.current = location;
      return;
    }

    if (previousLocation.current.key === location.key) {
      return;
    }

    const previousKey = previousLocation.current?.key;
    if (previousKey) {
      scrollPositions.set(previousKey, window.scrollY);
    }

    if (navigationType === "POP") {
      const savedPosition = scrollPositions.get(location.key) ?? 0;
      window.scrollTo({ top: savedPosition, left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    previousLocation.current = location;
  }, [location, navigationType]);

  return null;
};
