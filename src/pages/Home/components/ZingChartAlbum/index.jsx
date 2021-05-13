// libs
import React from "react";

// components
import HeaderZingChartAlbum from "./mains/HeaderZingChartAlbum";
import BodyZingChartAlbum from "./mains/BodyZingChartAlbum";

// orthers
import "./style.scss";

export default function ZingChartAlbum() {
  return (
    <section className="zingchartalbum">
      <HeaderZingChartAlbum />
      <BodyZingChartAlbum />
    </section>
  );
}
