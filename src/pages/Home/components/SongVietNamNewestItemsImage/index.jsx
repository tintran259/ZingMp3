// libs
import React from "react";
// orthers
import "./style.scss";

const SongVietNamListRightItemsImage = ({ item }) => (
  <div className="song-vietnam-newest-item-image-wrapper">
    <img className="song-vietnam-newest-item-image-img" src={item.image} alt="" />
    <div className="song-vietnam-newest-item-image-dialog">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay-button.png?alt=media&token=de184eec-0462-4958-9788-89b08684e474"
        className="song-vietnam-newest-item-image-dialog_img"
        alt=""
      />
    </div>
  </div>
);

export default SongVietNamListRightItemsImage;
