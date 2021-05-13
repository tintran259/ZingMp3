// libs
import React from "react";

// components
import DiscoverText from "./mains/DiscoverText";
import DiscoverThumb from "./mains/DiscoverThumb";

// orthers
import "./style.scss";

export default function Discover() {
  return (
    <div className="discover">
      <div className="discover-dialog"></div>
      <DiscoverThumb />
      <DiscoverText />
    </div>
  );
}
