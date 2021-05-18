// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartItemAlbumRight = ({ item }) => (
  <div className="album-item-zing-right">
    <span className="album-item-zing-right-title">{item.title}</span>
    <span className="album-item-zing-right-author">{item.author}</span>
  </div>
);

export default ZingChartItemAlbumRight;
