// libs
import React from "react";
import { useSetting } from "../../../../hooks";
// hooks

const HeaderNewsSong = () => {
  const { currentColor } = useSetting();
  return (
    <h1 style={{ color: currentColor }} className="zingchartMV-title">
      Tin tức âm nhạc
      <i className="fas fa-chevron-right icon-zingchart"></i>
    </h1>
  );
};

export default HeaderNewsSong;
