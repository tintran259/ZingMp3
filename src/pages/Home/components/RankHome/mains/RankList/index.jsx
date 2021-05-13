// libs
import React from "react";

// components
import SongRankItems from "../../components/SongRankItems";

// orthers
import "./style.scss";

const RankList = ({ rankSongList }) => (
  <div className="rank-list-wapper">
    <ul>{rankSongList && rankSongList.map((item) => <SongRankItems key={item.id} item={item} />)}</ul>
  </div>
);

export default RankList;
