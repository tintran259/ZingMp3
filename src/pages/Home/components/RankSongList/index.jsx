// libs
import React from "react";
// components
import RankSongListItems from "../RankSongListItems";
// orthers
import "./style.scss";

const RankSongList = ({ rankSongList }) => (
  <div className="rank-song-list-wrapper">
    <ul>{rankSongList && rankSongList.map((item) => <RankSongListItems key={item.id} item={item} />)}</ul>
  </div>
);

export default RankSongList;
