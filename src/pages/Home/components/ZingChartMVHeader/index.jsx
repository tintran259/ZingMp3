// libs
import React from "react";
import { useSetting } from "../../../../hooks";
// orthers
import "./style.scss";

const ZingChartMVHeader = () => {
  const { currentColor } = useSetting();
  return (
    <div className="zing-chart-MV-header-wapper">
      <h1 style={{ color: currentColor }} className="zing-chart-MV-title">
        #ZINGCHART TUẦN - MV
        <i className="fas fa-chevron-right icon-zingchart"></i>
      </h1>
      <a href="">
        <i className="far fa-play-circle icon-play"></i>
      </a>
    </div>
  );
};

export default ZingChartMVHeader;
