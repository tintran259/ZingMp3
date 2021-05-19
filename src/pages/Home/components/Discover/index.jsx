// libs
import React from "react";

// components
import DiscoverText from "../DiscoverText";
import DiscoverThumb from "../DiscoverThumb";

// orthers
import "./style.scss";

export default function Discover() {
  return (
    <div className="discover-wapper">
      <div className="discover-dialog"></div>
      <DiscoverThumb />
      <DiscoverText />
    </div>
  );
}
