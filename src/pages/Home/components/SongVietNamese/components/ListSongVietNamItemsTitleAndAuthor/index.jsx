// libs
import React from "react";

// orthers
import "./style.scss";

const ListSongVietNamItemsTitleAndAuthor = ({ item }) => (
  <div className="song-new-item-text">
    <span className="song-new-item-text_title">{item.title}</span>
    <span className="song-new-item-text_author">{item.author}</span>
  </div>
);

export default ListSongVietNamItemsTitleAndAuthor;
