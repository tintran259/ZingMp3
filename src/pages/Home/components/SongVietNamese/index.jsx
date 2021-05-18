// libs
import React from "react";

// components
import SongVietNamListLeft from "../SongVietNamListLeft";
import SongVietNamListRight from "../SongVietNamListRight";

// orthers
import "./style.scss";

export default function SongVietNamese() {
  return (
    <section className="song-vietnam-wapper">
      <SongVietNamListLeft />
      <SongVietNamListRight />
    </section>
  );
}
