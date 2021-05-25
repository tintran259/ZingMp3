// libs
import React from "react";
// orthers
import "./style.scss";

const ListAlbumItemsTitleAndAuthor = ({ item }) => (
  <div className="list-album-items-title-author-wrapper">
    <div className="album-item-title">{item.title}</div>
    <div className="album-item-author">{item.author}</div>
  </div>
);

export default ListAlbumItemsTitleAndAuthor;
