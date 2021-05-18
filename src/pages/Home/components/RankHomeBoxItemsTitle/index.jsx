// libs
import React from "react";

// orthers
import "./style.scss";

const SongItemsBoxTitle = ({ item }) => (
  <div className="box_title">
    <span className="box_title--name">{item.name}</span>
    <span className="box_title--author">{item.auth}</span>
  </div>
);

export default SongItemsBoxTitle;
