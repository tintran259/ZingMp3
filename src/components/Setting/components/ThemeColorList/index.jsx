// libs
import React from "react";
// hooks
import { useMultiColor } from "../../../../hooks";
// mocks
import { Color } from "../../../../mocks/Common";
// orthers
import "./style.scss";

const ThemeColorList = () => {
  const { currentColor, setCurrentColor } = useMultiColor();
  const handleChangeColor = ({ color }) => {
    setCurrentColor(color);
  };
  console.log("currentColor:", currentColor);
  return (
    <ul className="theme-color-list-wrapper">
      {Color &&
        Color.map((item) => (
          <li key={item.id}>
            <a href="#" onClick={() => handleChangeColor(item)}>
              <div
                className={`btn-theme-color ${currentColor === item.color ? "active-color" : ""}`}
                style={{ backgroundColor: item.color }}
              ></div>
            </a>
          </li>
        ))}
    </ul>
  );
};
export default ThemeColorList;
