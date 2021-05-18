import React from "react";

// components
import ZingChartSongHeader from "../ZingChartSongHeader";
import ZingChartSongBody from "../ZingChartSongBody";

// orthers
import "./style.scss";

export default function ZingChart() {
  return (
    <section className="zingchart">
      <ZingChartSongHeader />
      <ZingChartSongBody />
    </section>
  );
}
