// libs
import React from "react";

// components
import SongVietNamSpace from "../SongVietNamSpace";
import SongVietNamNewest from "../SongVietNamNewest";

// orthers
import "./style.scss";

export default function SongVietNamese() {
  return (
    <section className="song-vietnam-wapper">
      <SongVietNamSpace />
      <SongVietNamNewest />
    </section>
  );
}
