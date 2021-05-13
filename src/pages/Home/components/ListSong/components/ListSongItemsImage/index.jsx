// libs
import React from "react";

// orthers
import "./style.scss";

const ListSongItemsImage = ({ item }) => (
  <div className="list-song-item_bg">
    <img className="list-song-item_img" src={item.img} alt="php" />
    <div className="list-song-item_dialog">
      <img className="list-song-item_dialog-img" src="./image/play-button.png" alt="" />
    </div>
  </div>
);

export default ListSongItemsImage;
