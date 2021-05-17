// libs
import React from "react";

// components
import ZingChartItemSongPosition from "../ZingChartItemSongPosition";
import ZingChartItemSongContent from "../ZingChartItemSongContent";
import ZingChartItemSongControl from "../ZingChartItemSongConTrol";
// orthers
import "./style.scss";

export default function SongItem({ item }) {
  const { author } = item;
  return (
    <li className="song-item">
      <div className="song-item-nv">
        <ZingChartItemSongPosition item={item} />
        <ZingChartItemSongContent item={item} author={author} />
        <ZingChartItemSongControl />
      </div>
    </li>
  );
}
