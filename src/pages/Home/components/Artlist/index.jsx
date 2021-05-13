// libs
import React from "react";

// components
import ArtistLeft from "./mains/ArtistLeft";
import ArtistRight from "./mains/ArtistRight";

// orthers
import "./style.scss";

export default function Artlist() {
  return (
    <section className="section-artlist">
      <h1 className="section-artlist_title">
        Nghệ Sĩ Hot <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <section className="artist-wapper">
        <ArtistLeft />
        <ArtistRight />
      </section>
    </section>
  );
}
