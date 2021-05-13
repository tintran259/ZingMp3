// libs
import React from "react";

// components
import PositionSong from "../PositionSong";
import SongItemsBox from "../SongItemsBox";

// orthers
import "./style.scss";

const SongRankItems = ({ item }) => (
  <li>
    <div className="list-item">
      <PositionSong item={item} />
      <span className="list-item-line"></span>
      <SongItemsBox item={item} />
    </div>
  </li>
);
export default SongRankItems;
