// libs
import React from "react";
// orthers
import "./style.scss";

const ListAlbumItemsImage = ({ item }) => (
  <div className="list-album-item-image-wrapper">
    <img className="album-item-img" src={item.image} alt="phooto" />
    <div className="album-item-dialog">
      <img
        className="album-item-dialog_img"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay-button.png?alt=media&token=de184eec-0462-4958-9788-89b08684e474"
        alt=""
      />
    </div>
  </div>
);

export default ListAlbumItemsImage;
