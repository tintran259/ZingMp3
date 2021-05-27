// libs
import React from "react";
// hooks
import { useMultiColor, useMultiLang } from "../../../../hooks";
// orthers
import "./style.scss";

export default function HeaderZingChart() {
  const { dictionnary } = useMultiLang();
  const { currentColor } = useMultiColor();
  return (
    <div className="header-zing-chart-song-bg">
      <h1 className="zingchart-title" style={{ color: currentColor }}>
        {dictionnary.zingchartWeek}
        <i className="fas fa-chevron-right icon-zingchart"></i>
      </h1>
      <a href="">
        <i className="far fa-play-circle icon-play"></i>
      </a>
    </div>
  );
}
