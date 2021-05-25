// libs
import React from "react";
// components
import ZingChartAlbumMainItemsImage from "../ZingChartAlbumMainItemsImage";
import ZingChartAlbumMainItemsDes from "../ZingChartAlbumMainItemsDes";

// orthers
import "./style.scss";

const ZingChartAlbumMainItems = ({ item }) => (
  <li className="zing-chart-album-items-wrapper">
    <div className="zing-chart-album-items-innor">
      <ZingChartAlbumMainItemsImage item={item} />
      <ZingChartAlbumMainItemsDes item={item} />
    </div>
  </li>
);

export default ZingChartAlbumMainItems;
