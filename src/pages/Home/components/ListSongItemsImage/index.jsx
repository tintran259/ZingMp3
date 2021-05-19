// libs
import React from "react";

// orthers
import "./style.scss";

const ListSongItemsImage = ({ item }) => (
  <div className="list-song-item_image-wapper">
    <img className="list-song-item_img" src={item.img} alt="php" />
    <div className="list-song-item_dialog">
      <img
        className="list-song-item_dialog-img"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay-button.png?alt=media&token=de184eec-0462-4958-9788-89b08684e474"
        alt=""
      />
    </div>
  </div>
);

export default ListSongItemsImage;
