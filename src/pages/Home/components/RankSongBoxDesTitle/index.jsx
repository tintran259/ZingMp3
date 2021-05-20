// libs
import React from "react";

// orthers
import "./style.scss";

const RankSongBoxDesTitle = ({ item }) => (
  <div className="rank-song-box-des-title-wapper">
    <span className="rank-song-box-des-title--name">{item.name}</span>
    <span className="rank-song-box-des-title--author">{item.auth}</span>
  </div>
);

export default RankSongBoxDesTitle;
