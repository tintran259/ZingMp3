// libs
import React from "react";

// orthers
import "./style.scss";

export default function SlideHome({ imageHover }) {
  return (
    <div className="sildehome">
      <img className="sildehome-img" src={imageHover.img} alt="photoo" />
    </div>
  );
}
