// libs
import React from "react";
// orthers
import "./style.scss";

const SongVietNamNewestItemsTitle = ({ item }) => (
  <div className="song-vietnam-newest-item-title-wrapper">
    <span className="song-vietnam-newest-item-title_text">{item.title}</span>
    <span className="song-vietnam-newest-item-title_author">{item.author}</span>
  </div>
);

export default SongVietNamNewestItemsTitle;
