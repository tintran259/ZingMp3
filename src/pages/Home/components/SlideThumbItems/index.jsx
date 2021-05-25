// libs
import React from "react";
// orthers
import "./style.scss";

const SlideItems = ({ item, handleHover, index, indexImage }) => (
  <div
    className={`slide-thumb_item ${index === indexImage ? "active-img" : ""}`}
    onMouseEnter={() => handleHover(index)}
  >
    <img className="slide-thumb_img" src={item.img} alt="" />
    <div className="slide-thumb_dialog"></div>
  </div>
);

export default SlideItems;
