// libs
import { useCallback, useEffect, useState, useRef } from "react";
import { useEventListener } from "./useEventListener";

// Constants
import CONSTANTS from "../contants";

export default function useKeypress(page, isHovered) {
  const { KEY_CODE } = CONSTANTS;
  const { PAGE_UP, PAGE_DOWN } = KEY_CODE;
  const [pageItem, setPageItem] = useState(page);
  const currentPage = useRef(null);
  useEffect(() => {
    setPageItem(page);
  }, [page]);
  const handleKeyUpAndKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        case PAGE_UP:
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => {
            setPageItem(pageItem + 1);
          }, 500);
          break;
        case PAGE_DOWN:
          if (currentPage.current) {
            clearTimeout(currentPage.current);
          }
          currentPage.current = setTimeout(() => {
            setPageItem(pageItem - 1);
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
