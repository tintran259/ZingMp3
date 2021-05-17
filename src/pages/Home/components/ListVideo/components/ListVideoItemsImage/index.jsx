// libs
import React from "react";

// orthers
import "./style.scss";

const ListVideoItemsImage = ({ item }) => (
  <div className="video-img-bg">
    <img className="video-item_img" src={item.img} alt="alt" />
    <div className="video-item_dialog">
      <img
        className="video-item_dialog-img"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay-button.png?alt=media&token=de184eec-0462-4958-9788-89b08684e474"
        alt=""
      />
    </div>
  </div>
);

export default ListVideoItemsImage;
