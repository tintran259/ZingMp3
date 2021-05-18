// libs
import React from "react";
import "./style.scss";

// conponents
import ZingChartMVHeader from "../ZingChartMVHeader";
import ZingChartMVBody from "../ZingChartMVBody";

export default function ZingchartMV() {
  return (
    <section className="zingchartMV">
      <ZingChartMVHeader />
      <ZingChartMVBody />
    </section>
  );
}
