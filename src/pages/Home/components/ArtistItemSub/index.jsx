// libs
import React from "react";

// orthers
import "./style.scss";

const ArtistItemSub = ({ item }) => (
  <div className="artist-item-sub-wapper">
    <img className="artist-item-sub_img" src={item.img} alt="" />
    <div className="artist-item-sub_dialog">
      <span className="artist-item-sub_dialog-text">{item.content}</span>
    </div>
  </div>
);

export default ArtistItemSub;
