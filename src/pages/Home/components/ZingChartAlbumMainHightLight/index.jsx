// libs
import React from "react";
// components
import ZingChartAlbumMainHightLightImage from "../ZingChartAlbumMainHightLightImage";
import ZingChartAlbumMainHightLightTitle from "../ZingChartAlbumMainHightLightTitle";
// orthers
import "./style.scss";

const ZingChartAlbumMainHightLight = ({ ablumtop1 }) => (
  <div className="zing-chart-album-main-hightlight">
    <ZingChartAlbumMainHightLightImage ablumtop1={ablumtop1} />
    <div className="zing-chart-album-main-hightlight-dialog"></div>
    <ZingChartAlbumMainHightLightTitle ablumtop1={ablumtop1} />
  </div>
);
export default ZingChartAlbumMainHightLight;
