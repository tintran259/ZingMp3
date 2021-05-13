// libs
import React from "react";

// orthers
import "./style.scss";

const ListAlbumItemsImage = ({ item }) => (
  <div className="album-item-bg">
    <img className="album-item-img" src={item.image} alt="phooto" />
    <div className="album-item-dialog">
      <img className="album-item-dialog_img" src="./image/play-button.png" alt="" />
    </div>
  </div>
);

export default ListAlbumItemsImage;
