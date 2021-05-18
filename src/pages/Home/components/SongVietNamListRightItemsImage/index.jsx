// libs
import React from "react";

// orthers
import "./style.scss";

const ListSongVietNamItemsImage = ({ item }) => (
  <div className="song-new-item-bg">
    <img className="song-new-item-img" src={item.image} alt="" />
    <div className="song-new-item-dialog">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay-button.png?alt=media&token=de184eec-0462-4958-9788-89b08684e474"
        className="song-new-item-dialog_img"
        alt=""
      />
    </div>
  </div>
);

export default ListSongVietNamItemsImage;
