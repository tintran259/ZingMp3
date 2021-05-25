// libs
import { useEffect } from "react";

const useEventListener = (isHovered, handleKeyUpAndKeyDown) => {
  useEffect(() => {
    if (isHovered) {
      window.addEventListener("keydown", handleKeyUpAndKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyUpAndKeyDown);
    };
  }, [isHovered, handleKeyUpAndKeyDown]);
};

export { useEventListener };
