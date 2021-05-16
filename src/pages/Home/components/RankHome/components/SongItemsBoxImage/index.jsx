// libs
import React from "react";

// orthers
import "./style.scss";

const SongItemsBoxImage = ({ item }) => (
  <div className="list-item-box-bg">
    <img className="list-item-box_img" src={item.img} alt="alt" />
    <div className="list-item-box_dialog">
      <img className="list-item-box_dialog-img" src="./image/play.png" alt="" />
    </div>
  </div>
);

export default SongItemsBoxImage;
