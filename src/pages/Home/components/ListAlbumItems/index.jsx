// libs
import React from "react";

// components
import ListAlbumItemsImage from "../ListAlbumItemsImage";
import ListAlbumItemsTitleAndAuthor from "../ListAlbumItemsTitleAndAuthor";

// orthers
import "./style.scss";

const ListAlbumItems = ({ item }) => (
  <div className="list-album-items-wapper">
    <ListAlbumItemsImage item={item} />
    <ListAlbumItemsTitleAndAuthor item={item} />
  </div>
);

export default ListAlbumItems;
