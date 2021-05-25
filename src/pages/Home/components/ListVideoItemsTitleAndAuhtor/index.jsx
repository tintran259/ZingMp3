// libs
import React from "react";
// orthers
import "./style.scss";

const ListVideoItemsTitleAndAuthor = ({ item }) => (
  <>
    <div className="video-item_title">{item.title}</div>
    <div className="video-item_author">{item.author}</div>
  </>
);

export default ListVideoItemsTitleAndAuthor;
