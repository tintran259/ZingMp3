// libs
import React from "react";

// orthers
import "./style.scss";

const RankSongItemPosition = ({ item }) => (
  <span style={{ color: item.colorPosition }} className="rank-song-item-position">
    {item.position}
  </span>
);

export default RankSongItemPosition;
