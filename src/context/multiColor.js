// libs
import React, { createContext, useState } from "react";

export const MultiColorAndPositionContext = createContext();

const MultiColorContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#212529");
  const [isFixed, setIsFixed] = useState(false);
  const initialValue = {
    currentColor,
    setCurrentColor,
    isFixed,
    setIsFixed,
  };
  return <MultiColorAndPositionContext.Provider value={initialValue}>{children}</MultiColorAndPositionContext.Provider>;
};

export default MultiColorContextProvider;
