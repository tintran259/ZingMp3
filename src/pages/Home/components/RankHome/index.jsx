// libs
import React from "react";

// components
import ChartSong from "./mains/ChartSong";
import RankList from "./mains/RankList";

// dataSource
import { rankSongList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const RankHome = () => (
  <section className="section-rank">
    <ChartSong />
    <RankList rankSongList={rankSongList} />
  </section>
);

export default RankHome;
