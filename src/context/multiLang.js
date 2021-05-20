import React, { createContext, useState } from "react";
import { dictionaryList } from "./Dictionary";

export const MultiLangContext = createContext();

const MultiLangContextProvider = ({ children }) => {
  const [dictionnary, setDistionary] = useState(dictionaryList.en);
  const handleChangeVN = () => {
    setDistionary(dictionaryList.vn);
  };
  const handleChangeEN = () => {
    setDistionary(dictionaryList.en);
  };

  const initialProps = {
    dictionnary,
    handleChangeVN,
    handleChangeEN,
  };
  return <MultiLangContext.Provider value={initialProps}>{children}</MultiLangContext.Provider>;
};

export default MultiLangContextProvider;
