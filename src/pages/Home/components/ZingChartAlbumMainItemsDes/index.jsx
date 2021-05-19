// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartAlbumMainItemsDes = ({ item }) => (
  <div className="zing-chart-album-main-items-des">
    <span className="zing-chart-album-main-items-des-title">{item.title}</span>
    <span className="zing-chart-album-main-items-des-author">{item.author}</span>
  </div>
);

export default ZingChartAlbumMainItemsDes;
