// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartAlbumBodyHeaderImageTopContent = ({ ablumtop1 }) => (
  <div className="bg-zingchart-album-des">
    <span className="text">{ablumtop1.position}</span>
    <div className="content">
      <span className="title">{ablumtop1.title}</span>
      <span className="author">{ablumtop1.author}</span>
    </div>
  </div>
);

export default ZingChartAlbumBodyHeaderImageTopContent;
