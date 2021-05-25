// libs
import React from "react";
// components
import RankSongItemPosition from "../RankSongItemPosition";
import RankSongBoxDes from "../RankSongBoxDes";
// orthers
import "./style.scss";

const SongRankItems = ({ item }) => (
  <li>
    <div className="rank-song-list-item">
      <RankSongItemPosition item={item} />
      <span className="rank-song-list-item-line"></span>
      <RankSongBoxDes item={item} />
    </div>
  </li>
);
export default SongRankItems;
