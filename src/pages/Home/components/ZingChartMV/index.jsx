// libs
import React from "react";
import "./style.scss";

// conponents
import HeaderZingChartMV from "./mains/HeaderZingChartMV";
import BodyZingChartMV from "./mains/BodyZingChartMV";

export default function ZingchartMV() {
  return (
    <section className="zingchartMV">
      <HeaderZingChartMV />
      <BodyZingChartMV />
    </section>
  );
}
