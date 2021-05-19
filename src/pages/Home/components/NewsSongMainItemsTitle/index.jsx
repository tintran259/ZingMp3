// libs
import React from "react";

// orthers
import "./style.scss";

const NewsSongMainItemsTitle = ({ item }) => (
  <div className="news-song-main-item-title">
    <span className="news-song-main-item-title-text">{item.title}</span>
  </div>
);

export default NewsSongMainItemsTitle;
