// libs
import React from "react";

// components
import NewsSongHeader from "../NewsSongHeader";
import NewsSongBody from "../NewsSongBody";

// orthers
import "./style.scss";

export default function NewsSong() {
  return (
    <section className="newsSong">
      <NewsSongHeader />
      <NewsSongBody />
    </section>
  );
}
