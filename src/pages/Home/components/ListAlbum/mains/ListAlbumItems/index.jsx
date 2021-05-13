// libs
import React from "react";

// components
import ListAlbumItemsImage from "../../components/ListAlbumItemsImage";
import ListAlbumItemsTitleAndAuthor from "../../components/ListAlbumItemsTitleAndAuthor";

// orthers
import "./style.scss";

const ListAlbumItems = ({ item }) => (
  <div className="album-item">
    <ListAlbumItemsImage item={item} />
    <ListAlbumItemsTitleAndAuthor item={item} />
  </div>
);

export default ListAlbumItems;
