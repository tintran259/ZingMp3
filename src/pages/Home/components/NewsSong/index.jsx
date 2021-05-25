// libs
import React from "react";
// components
import NewsSongHeader from "../NewsSongHeader";
import NewsSongMain from "../NewsSongMain";

// orthers
import "./style.scss";

export default function NewsSong() {
  return (
    <section className="news-song-wrapper">
      <NewsSongHeader />
      <NewsSongMain />
    </section>
  );
}
