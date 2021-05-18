// libs
import React from "react";

// components
import RankHomeItems from "../RankHomeItems";

// orthers
import "./style.scss";

const RankList = ({ rankSongList }) => (
  <div className="rank-list-wapper">
    <ul>{rankSongList && rankSongList.map((item) => <RankHomeItems key={item.id} item={item} />)}</ul>
  </div>
);

export default RankList;
