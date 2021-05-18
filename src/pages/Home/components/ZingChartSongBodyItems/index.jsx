// libs
import React from "react";

// components
import ZingChartSongBodyItemsPosition from "../ZingChartSongBodyItemsPosition";
import ZingChartSongBodyItemsContent from "../ZingChartSongBodyItemsContent";
import ZingChartSongBodyItemsControl from "../ZingChartSongBodyItemsControl";

// orthers
import "./style.scss";

export default function SongItem({ item }) {
  const { author } = item;
  return (
    <li className="song-item">
      <div className="song-item-nv">
        <ZingChartSongBodyItemsPosition item={item} />
        <ZingChartSongBodyItemsContent item={item} author={author} />
        <ZingChartSongBodyItemsControl />
      </div>
    </li>
  );
}
