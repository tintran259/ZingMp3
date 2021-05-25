// libs
import React from "react";
// orthers
import "./style.scss";

export default function SlideHome({ bannerList, indexImage }) {
  return (
    <div className="silde-home">
      <img className="silde-home-img" src={bannerList[indexImage] && bannerList[indexImage].img} alt="photoo" />
    </div>
  );
}
