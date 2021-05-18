// libs
import React from "react";

// components
import RankHomeChartSong from "../RankHomeChartSong";
import RankHomeList from "../RankHomeList";

// mocks
import { rankSongList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const RankHome = () => (
  <section className="section-rank">
    <RankHomeChartSong />
    <RankHomeList rankSongList={rankSongList} />
  </section>
);

export default RankHome;
