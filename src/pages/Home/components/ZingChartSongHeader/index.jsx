// libs
import React, { useContext } from "react";
// orthers
import "./style.scss";
// Context
import { MultiLangContext } from "../../../../context/multiLang";

export default function HeaderZingChart() {
  const { dictionnary } = useContext(MultiLangContext);
  return (
    <div className="header-zing-chart-song-bg">
      <h1 className="zingchart-title">
        {dictionnary.zingchartWeek}
        <i className="fas fa-chevron-right icon-zingchart"></i>
      </h1>
      <a href="">
        <i className="far fa-play-circle icon-play"></i>
      </a>
    </div>
  );
}
