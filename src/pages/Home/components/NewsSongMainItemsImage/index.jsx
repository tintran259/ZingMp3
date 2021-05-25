// libs
import React from "react";
// orthers
import "./style.scss";

const NewsSongMainItemsImage = ({ item }) => (
  <div className="news-song-main-item-image">
    <img className="news-song-main-item-image-img" src={item.img} alt="" />
    <div className="news-song-main-item-image-dialog"></div>
  </div>
);

export default NewsSongMainItemsImage;
