// libs
import React from "react";

// orthers
import "./style.scss";

const ListAlbumItemsTitleAndAuthor = ({ item }) => (
  <>
    <div className="album-item-title">{item.title}</div>
    <div className="album-item-author">{item.author}</div>
  </>
);

export default ListAlbumItemsTitleAndAuthor;
