// libs
import React from "react";

// orthers
import "./style.scss";

const NewsSongItemsImage = ({ item }) => (
  <div className="items-content-left">
    <img className="items-content-left-img" src={item.img} alt="" />
    <div className="items-content-left-dialog"></div>
  </div>
);

export default NewsSongItemsImage;
