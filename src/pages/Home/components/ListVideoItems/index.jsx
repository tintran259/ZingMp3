// libs
import React from "react";

// components
import ListVideoItemsImage from "../ListVideoItemsImage";
import ListVideoItemsTitleAndAuthor from "../ListVideoItemsTitleAndAuhtor";

// orthers
import "./style.scss";

const ListVideoItems = ({ item }) => (
  <div className="video-item">
    <ListVideoItemsImage item={item} />
    <ListVideoItemsTitleAndAuthor item={item} />
  </div>
);

export default ListVideoItems;
