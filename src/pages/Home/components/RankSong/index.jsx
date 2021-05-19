// libs
import React from "react";

// components
import RankSongChart from "../RankSongChart";
import RankSongList from "../RankSongList";

// mocks
import { rankSongList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const RankSong = () => (
  <section className="rank-song-wapper">
    <RankSongChart />
    <RankSongList rankSongList={rankSongList} />
  </section>
);

export default RankSong;
