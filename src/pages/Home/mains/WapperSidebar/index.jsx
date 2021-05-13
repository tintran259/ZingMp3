import React from "react";
import "./style.scss";

import Discover from "../../components/Discover";
import TopicHot from "../../components/TopicHot";
import ZingChartSong from "../../components/ZingChartSong";
import NewsSong from "../../components/NewsSong";
import ZingChartAlbum from "../../components/ZingChartAlbum";
import ZingChartMV from "../../components/ZingChartMV";

export default function WapperSlidebar() {
  return (
    <div className="Wapper-Slidebar">
      <Discover />
      <TopicHot />
      <ZingChartSong />
      <ZingChartMV />
      <ZingChartAlbum />
      <NewsSong />
    </div>
  );
}
