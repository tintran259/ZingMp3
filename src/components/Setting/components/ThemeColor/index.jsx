// libs
import React from "react";
// hooks
import { useMultiLang } from "../../../../hooks";
// components
import ThemeColorList from "../ThemeColorList";
// orthers
import "./style.scss";

const ThemeColor = () => {
  const { dictionnary } = useMultiLang();
  return (
    <div className="theme-color-wrapper">
      <h3 className="theme-color-title">{dictionnary.themeColor}</h3>
      <ThemeColorList />
    </div>
  );
};

export default ThemeColor;
