// libs
import React from "react";

// components
import ZingChartAlbumHeader from "../ZingChartAlbumHeader";
import ZingChartAlbumBody from "../ZingChartAlbumBody";

// orthers
import "./style.scss";

export default function ZingChartAlbum() {
  return (
    <section className="zing-chart-album-wapper">
      <ZingChartAlbumHeader />
      <ZingChartAlbumBody />
    </section>
  );
}
