// libs
import React from "react";
// components
import SongVietNamNewestItemsImage from "../SongVietNamNewestItemsImage";
import SongVietNamNewestItemsControl from "../SongVietNamNewestItemsControl";
import SongVietNamNewestItemsTitle from "../SongVietNamNewestItemsTitle";
// orthers
import "./style.scss";

export default function SongVietNamNewestItems({ item }) {
  return (
    <li className="song-vietnam-newest-item">
      <SongVietNamNewestItemsImage item={item} />
      <SongVietNamNewestItemsControl />
      <SongVietNamNewestItemsTitle item={item} />
    </li>
  );
}
