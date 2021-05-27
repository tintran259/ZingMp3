// libs
import React, { createContext, useState } from "react";

export const MultiSettingContext = createContext();

const MultiSettingContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#212529");
  const [isFixed, setIsFixed] = useState(false);
  const initialValue = {
    currentColor,
    setCurrentColor,
    isFixed,
    setIsFixed,
  };
  return <MultiSettingContext.Provider value={initialValue}>{children}</MultiSettingContext.Provider>;
};

export default MultiSettingContextProvider;
