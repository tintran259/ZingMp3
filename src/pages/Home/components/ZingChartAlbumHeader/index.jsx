// libs
import React from "react";
// hooks
import { useSetting } from "../../../../hooks";
// orthers
import "./style.scss";

export default function ZingChartAlbumHeader() {
  const { currentColor } = useSetting();
  return (
    <div className="zing-chart-album-header-wappper">
      <h1 style={{ color: currentColor }} className="zing-chart-album-title">
        #ZINGCHART TUẦN - ALBUM
        <i className="fas fa-chevron-right icon-zingchart"></i>
      </h1>
    </div>
  );
}
