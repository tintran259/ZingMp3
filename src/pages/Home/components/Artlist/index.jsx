// libs
import React from "react";

// components
import ArtistImageLarge from "../ArtistImageLarge";
import ArtistRight from "../ArtistImageSub";

// orthers
import "./style.scss";

export default function Artlist() {
  return (
    <section className="section-artlist-wapper">
      <h1 className="section-artlist_title">
        Nghệ Sĩ Hot <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <section className="artist-wapper">
        <ArtistImageLarge />
        <ArtistRight />
      </section>
    </section>
  );
}
