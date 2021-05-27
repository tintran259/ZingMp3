// libs
import { useCallback, useState, useRef } from "react";
import { useEventListener } from "./useEventListener";

// Constants
import CONSTANTS from "../contants";

export default function useKeypress(isHovered) {
  const { KEY_CODE } = CONSTANTS;
  const { PAGE_UP, PAGE_DOWN } = KEY_CODE;
  const [pageItem, setPageItem] = useState(1);
  const currentPage = useRef(null);
  const handleKeyUpAndKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case PAGE_UP:
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => {
            if (pageItem >= 3) {
              setPageItem(3);
            } else {
              setPageItem(pageItem + 1);
            }
          }, 500);
          break;
        case PAGE_DOWN:
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => {
            if (pageItem <= 1) {
              setPageItem(1);
            } else {
              setPageItem(pageItem - 1);
            }
          }, 500);
          break;
        default:
          return pageItem;
      }
      return pageItem;
    },
    [pageItem, PAGE_UP, PAGE_DOWN]
  );
  useEventListener(isHovered, handleKeyUpAndKeyDown);
  return pageItem;
}
