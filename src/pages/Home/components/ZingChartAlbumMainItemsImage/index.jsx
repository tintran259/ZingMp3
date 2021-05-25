// libs
import React from "react";
// orthers
import "./style.scss";

const ZingChartAlbumMainItemsImage = ({ item }) => (
  <div className="zing-chart-album-main-items-image">
    <div className="zing-chart-album-main-items-image-bg">
      <img className="zing-chart-album-main-items-image-img" src={item.img} alt="photoEmpty" />
    </div>
    <span className="position-album">{item.position}</span>
    <div className="zing-chart-album-main-items-image-dialog"></div>
    <div className="zing-chart-album-main-items-image-dialog2">
      <img
        className="icon-album-play"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay.png?alt=media&token=ed06c612-b4d6-4b1d-9c5f-58d3c8021df5"
        alt=""
      />
    </div>
  </div>
);

export default ZingChartAlbumMainItemsImage;
