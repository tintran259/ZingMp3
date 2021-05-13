// libs
import React from "react";

// orthers
import "./style.scss";

export default function ArtistItemList({ item }) {
  return (
    <div className="artist-wapper-right-item">
      <img className="artist-wapper-right_img" src={item.img} alt="" />
      <div className="artist-wapper-right_dialog">
        <span className="artist-wapper-right_dialog-text">{item.content}</span>
      </div>
    </div>
  );
}
