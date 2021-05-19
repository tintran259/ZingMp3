// libs
import React from "react";

// orthers
import "./style.scss";

const SongItemsBoxImage = ({ item }) => (
  <div className="list-item-box-bg">
    <img className="list-item-box_img" src={item.img} alt="alt" />
    <div className="list-item-box_dialog">
      <img
        className="list-item-box_dialog-img"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay.png?alt=media&token=ed06c612-b4d6-4b1d-9c5f-58d3c8021df5"
        alt=""
      />
    </div>
  </div>
);

export default SongItemsBoxImage;
