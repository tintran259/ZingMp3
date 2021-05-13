// libs
import React from "react";

// orthers
import "./style.scss";

const PositionSong = ({ item }) => (
  <span style={{ color: item.colorPosition }} className="list-item-position">
    {item.position}
  </span>
);

export default PositionSong;
