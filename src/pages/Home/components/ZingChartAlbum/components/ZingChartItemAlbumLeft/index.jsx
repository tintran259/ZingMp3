// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartItemAlbumLeft = ({ item }) => (
  <div className="album-item-zing-left">
    <div className="album-item-zing-left-bg">
      <img className="album-item-zing-left-img" src={item.img} alt="photoEmpty" />
    </div>
    <span className="position-album">{item.position}</span>
    <div className="album-item-zing-left-dialog"></div>
    <div className="album-item-zing-left-dialog2">
      <img
        className="icon-album-play"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay.png?alt=media&token=ed06c612-b4d6-4b1d-9c5f-58d3c8021df5"
        alt=""
      />
    </div>
  </div>
);

export default ZingChartItemAlbumLeft;
