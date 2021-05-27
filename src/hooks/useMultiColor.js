// libs
import { useContext } from "react";
import { MultiColorAndPositionContext } from "../context/multiColor";

const useMultiColor = () => {
  const { currentColor, setCurrentColor, isFixed, setIsFixed } = useContext(MultiColorAndPositionContext);
  return { currentColor, setCurrentColor, isFixed, setIsFixed };
};

export default useMultiColor;
