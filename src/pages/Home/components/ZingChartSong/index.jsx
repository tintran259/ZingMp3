import React from "react";

// components
import ZingChartSongHeader from "../ZingChartSongHeader";
import ZingChartSongMains from "../ZingChartSongMains";

// orthers
import "./style.scss";

const ZingChartSong = () => (
  <section className="zing-chart-song-wapper">
    <ZingChartSongHeader />
    <ZingChartSongMains />
  </section>
);

export default ZingChartSong;
