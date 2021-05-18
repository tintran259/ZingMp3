// libs
import React from "react";

// components
import ListSongItemsImage from "../ListSongItemsImage";
import ListSongItemsTitle from "../ListSongItemsTitle";

// orthers
import "./style.scss";

const ListSongItems = ({ item }) => (
  <div className="list-song-item">
    <ListSongItemsImage item={item} />
    <ListSongItemsTitle item={item} />
  </div>
);

export default ListSongItems;
