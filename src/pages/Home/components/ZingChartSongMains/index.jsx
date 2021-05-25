// libs
import React from "react";
// components
import ZingChartSongMainTav from "../ZingChartSongMainTav";
import ZingChartSongMainHightLightImage from "../ZingChartSongMainHightLightImage";
import ZingChartSongMainItems from "../ZingChartSongMainItems";
// mocks
import { listSong } from "../../../../mocks/Home";
// orthers
import "./style.scss";

const ZingChartSongMains = () => (
  <div className="zing-chart-song-main-wrapper">
    <ZingChartSongMainTav />
    <ZingChartSongMainHightLightImage />
    <ul className="zing-chart-song-main-list">
      {listSong && listSong.map((item) => <ZingChartSongMainItems key={item.id} item={item} />)}
    </ul>
  </div>
);

export default ZingChartSongMains;
