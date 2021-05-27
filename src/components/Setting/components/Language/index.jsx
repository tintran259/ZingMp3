// libs
import React from "react";
// hooks
import { useMultiLang } from "../../../../hooks";
// components
import LanguageList from "../LanguageList";
// orthers
import "./style.scss";

const Language = () => {
  const { dictionnary } = useMultiLang();
  return (
    <div className="language-wrapper">
      <h3 className="language-title">{dictionnary.language}</h3>
      <LanguageList />
    </div>
  );
};

export default Language;
