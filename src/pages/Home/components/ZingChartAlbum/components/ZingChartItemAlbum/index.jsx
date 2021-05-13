// libs
import React from "react";

// orthers
import "./style.scss";

export default function ZingChartItemAlbum({ item }) {
  return (
    <li className="list-item-Album">
      <div className="album-item-zing">
        <div className="album-item-zing-left">
          <div className="album-item-zing-left-bg">
            <img className="album-item-zing-left-img" src={item.img} alt="photoEmpty" />
          </div>
          <span className="position-album">{item.position}</span>
          <div className="album-item-zing-left-dialog"></div>
          <div className="album-item-zing-left-dialog2">
            <img className="icon-album-play" src="./image/play.png" alt="" />
          </div>
        </div>
        <div className="album-item-zing-right">
          <span className="album-item-zing-right-title">{item.title}</span>
          <span className="album-item-zing-right-author">{item.author}</span>
        </div>
      </div>
    </li>
  );
}
