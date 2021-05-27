// libs
import React from "react";
// hooks
import { useMultiColor } from "../../../../hooks";
// components
import ArtistImageLarge from "../ArtistImageLarge";
import ArtistRight from "../ArtistImageSub";

// orthers
import "./style.scss";

export default function Artlist() {
  const { currentColor } = useMultiColor();
  return (
    <section className="section-artlist-wapper">
      <h1 style={{ color: currentColor }} className="section-artlist_title">
        Nghệ Sĩ Hot <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <section className="artist-wapper">
        <ArtistImageLarge />
        <ArtistRight />
      </section>
    </section>
  );
}
