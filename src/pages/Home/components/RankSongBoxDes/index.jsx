// libs
import React from "react";
// components
import RankSongBoxDesImage from "../RankSongBoxDesImage";
import RankSongBoxDesTitle from "../RankSongBoxDesTitle";
import RankSongBoxDesControl from "../RankSongBoxDesControl";
// orthers
import "./style.scss";

const RankSongBoxDes = ({ item }) => (
  <div className="rank-song-box-des-wrapper">
    <RankSongBoxDesImage item={item} />
    <div className="box">
      <RankSongBoxDesTitle item={item} />
      <RankSongBoxDesControl />
    </div>
  </div>
);

export default RankSongBoxDes;
