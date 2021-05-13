import React from "react";

// components
import HeaderZingChart from "./mains/HeaderZingchartSong";
import BodyZingChart from "./mains/BodyZingChartSong";

// orthers
import "./style.scss";

export default function ZingChart() {
  return (
    <section className="zingchart">
      <HeaderZingChart />
      <BodyZingChart />
    </section>
  );
}
