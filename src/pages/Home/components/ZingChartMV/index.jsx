// libs
import React from "react";
import "./style.scss";

// conponents
import ZingChartMVHeader from "../ZingChartMVHeader";
import ZingChartMVMain from "../ZingChartMVMain";

export default function ZingchartMV() {
  return (
    <section className="zing-chart-MV-wapper">
      <ZingChartMVHeader />
      <ZingChartMVMain />
    </section>
  );
}
