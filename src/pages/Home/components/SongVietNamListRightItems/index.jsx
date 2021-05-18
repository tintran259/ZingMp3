// libs
import React from "react";

// components
import SongVietNamListRightItemsImage from "../SongVietNamListRightItemsImage";
import SongVietNamListRightItemsContact from "../SongVietNamListRightItemsContact";
import SongVietNamListRightItemsContent from "../SongVietNamListRightItemsContent";

// orthers
import "./style.scss";

export default function ListSongVietNam({ item }) {
  return (
    <li className="song-new-item">
      <SongVietNamListRightItemsImage item={item} />
      <SongVietNamListRightItemsContact />
      <SongVietNamListRightItemsContent item={item} />
    </li>
  );
}
