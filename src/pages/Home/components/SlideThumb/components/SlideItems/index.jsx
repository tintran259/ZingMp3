// libs
import React from "react";

// orthers
import "./style.scss";

const SlideItems = ({ item, handleHover }) => (
  <div key={item.id} className="slide-thumb_item" onMouseEnter={() => handleHover(item)}>
    <img className="slide-thumb_img" src={item.img} alt="" />
    <div className="slide-thumb_dialog"></div>
  </div>
);

export default SlideItems;
