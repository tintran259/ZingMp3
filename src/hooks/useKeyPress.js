// libs
import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

// Constants
import CONSTANTS from "../contants";

export default function useKeypress(page, isHovered) {
  const { KEY_CODE } = CONSTANTS;
  const { PAGE_UP, PAGE_DOWN } = KEY_CODE;
  const [pageItem, setPageItem] = useState(page);
  useEffect(() => {
    setPageItem(page);
  }, [page]);
  const handleKeyUpAndKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case PAGE_UP:
          return setPageItem(pageItem + 1);
        case PAGE_DOWN:
          return setPageItem(pageItem - 1);
        default:
          return pageItem;
      }
    },
    [pageItem, PAGE_UP, PAGE_DOWN]
  );
  useEventListener(isHovered, handleKeyUpAndKeyDown);
  return pageItem;
}
