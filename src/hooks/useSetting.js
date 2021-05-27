// libs
import { useContext } from "react";
import { MultiSettingContext } from "../context/setting";

const useSetting = () => {
  const { currentColor, setCurrentColor, isFixed, setIsFixed } = useContext(MultiSettingContext);
  return { currentColor, setCurrentColor, isFixed, setIsFixed };
};

export default useSetting;
