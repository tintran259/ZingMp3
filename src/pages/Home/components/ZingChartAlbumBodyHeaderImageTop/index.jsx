// libs
import React from "react";

// components
import ZingChartAlbumBodyHeaderImageTopImg from "../ZingChartAlbumBodyHeaderImageTopImg";
import ZingChartAlbumBodyHeaderImageTopContent from "../ZingChartAlbumBodyHeaderImageTopContent";

// orthers
import "./style.scss";

const ZingChartAlbumBodyHeaderImageTop = ({ ablumtop1 }) => (
  <div className="bg-zingchart-album">
    <ZingChartAlbumBodyHeaderImageTopImg ablumtop1={ablumtop1} />
    <div className="bg-zingchart-album-dialog"></div>
    <ZingChartAlbumBodyHeaderImageTopContent ablumtop1={ablumtop1} />
  </div>
);

export default ZingChartAlbumBodyHeaderImageTop;
