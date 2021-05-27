// libs
import React, { useContext } from "react";
// components
import LanguageList from "../LanguageList";
// context
import { MultiLangContext } from "../../../../context/multiLang";
// orthers
import "./style.scss";

const Language = () => {
  const { dictionnary } = useContext(MultiLangContext);
  return (
    <div className="language-wrapper">
      <h3 className="language-title">{dictionnary.language}</h3>
      <LanguageList />
    </div>
  );
};

export default Language;
