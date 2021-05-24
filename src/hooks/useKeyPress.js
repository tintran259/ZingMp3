import { useCallback, useEffect, useState } from "react";

export default function useKeypress(key, page, isHovered) {
  const [pageItem, setPageItem] = useState(page);
  useEffect(() => {
    setPageItem(page);
  }, [page]);
  const handleKeyUpAndKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === key && key === 33) {
        return setPageItem(pageItem + 1);
      }
      if (e.keyCode === key && key === 34) {
        return setPageItem(pageItem - 1);
      }
      return pageItem;
    },
    [pageItem, key]
  );
  useEffect(() => {
    if (isHovered) {
      window.addEventListener("keydown", handleKeyUpAndKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyUpAndKeyDown);
    };
  }, [handleKeyUpAndKeyDown, isHovered]);

  return pageItem;
}
