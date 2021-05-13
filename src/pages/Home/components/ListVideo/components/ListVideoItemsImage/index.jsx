// libs
import React from "react";

// orthers
import "./style.scss";

const ListVideoItemsImage = ({ item }) => (
  <div className="video-img-bg">
    <img className="video-item_img" src={item.img} alt="alt" />
    <div className="video-item_dialog">
      <img className="video-item_dialog-img" src="./image/play-button.png" alt="" />
    </div>
  </div>
);

export default ListVideoItemsImage;
