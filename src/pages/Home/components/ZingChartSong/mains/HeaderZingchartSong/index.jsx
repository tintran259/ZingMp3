// libs
import React from "react";

// orthers
import "./style.scss";

export default function HeaderZingChart() {
  return (
    <div className="header-zing-chart-song-bg">
      <h1 className="zingchart-title">
        #ZINGCHART Tuần - Bài Hát
        <i className="fas fa-chevron-right icon-zingchart"></i>
      </h1>
      <a href="">
        <i className="far fa-play-circle icon-play"></i>
      </a>
    </div>
  );
}
