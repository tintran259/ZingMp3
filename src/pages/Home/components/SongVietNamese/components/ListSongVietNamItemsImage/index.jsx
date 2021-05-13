// libs
import React from "react";

// orthers
import "./style.scss";

const ListSongVietNamItemsImage = ({ item }) => (
  <div className="song-new-item-bg">
    <img className="song-new-item-img" src={item.image} alt="" />
    <div className="song-new-item-dialog">
      <img src="./image/play-button.png" className="song-new-item-dialog_img" alt="" />
    </div>
  </div>
);

export default ListSongVietNamItemsImage;
