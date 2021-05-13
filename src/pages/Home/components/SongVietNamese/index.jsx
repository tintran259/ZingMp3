// libs
import React from "react";

// components
import ListSongVietNamRight from "./mains/ListSongVietNamRight";
import ListSongVietNamLeft from "./mains/ListSongVietNamLeft";

// orthers
import "./style.scss";

export default function SongVietNamese() {
  return (
    <section className="song-vietnam-wapper">
      <ListSongVietNamLeft />
      <ListSongVietNamRight />
    </section>
  );
}
