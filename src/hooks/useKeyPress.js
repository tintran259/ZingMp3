// libs
import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

export default function useKeypress(key, page, isHovered) {
  // Constants
  const { PnUp, PnDown } = key;
  // Contructor
  const [pageItem, setPageItem] = useState(page);
  // life Cicle;
  useEffect(() => {
    setPageItem(page);
  }, [page]);
  const handleKeyUpAndKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case PnUp:
          return setPageItem(pageItem + 1);
        case PnDown:
          return setPageItem(pageItem - 1);
        default:
          return pageItem;
      }
    },
    [pageItem, PnUp, PnDown]
  );
  useEventListener(isHovered, handleKeyUpAndKeyDown);
  return pageItem;
}
