// libs
import React from "react";

// components
import ListSongVietNamItemsImage from "../ListSongVietNamItemsImage";
import ListSongVietNamItemsContact from "../ListSongVietNamItemsContact";
import ListSongVietNamItemsTitleAndAuthor from "../ListSongVietNamItemsTitleAndAuthor";

// orthers
import "./style.scss";

export default function ListSongVietNam({ item }) {
  return (
    <li className="song-new-item">
      <ListSongVietNamItemsImage item={item} />
      <ListSongVietNamItemsContact />
      <ListSongVietNamItemsTitleAndAuthor item={item} />
    </li>
  );
}
