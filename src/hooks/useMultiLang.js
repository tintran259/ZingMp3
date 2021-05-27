// libs
import { useContext } from "react";
// context
import { MultiLangContext } from "../context/multiLang";

const useMultiLang = () => {
  const { dictionnary, handleChangeVN, handleChangeEN } = useContext(MultiLangContext);
  return { dictionnary, handleChangeVN, handleChangeEN };
};

export default useMultiLang;
