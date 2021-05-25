// libs
import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => {
    setValue(true);
  };
  const handleMouseOut = () => {
    setValue(false);
  };
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseenter", handleMouseOver);
        node.addEventListener("mouseleave", handleMouseOut);
        return () => {
          node.removeEventListener("mouseenter", handleMouseOver);
          node.removeEventListener("mouseleave", handleMouseOut);
        };
      }
      return 0;
    },
    [ref] // Recall only if ref changes
  );
  return [ref, value];
};

export default useHover;
