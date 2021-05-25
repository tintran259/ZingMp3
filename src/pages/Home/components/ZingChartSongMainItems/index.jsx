// libs
import React from "react";
// components
import ZingChartSongMainsItemsPosition from "../ZingChartSongMainsItemsPosition";
import ZingChartSongMainsItemsDes from "../ZingChartSongMainsItemsDes";
import ZingChartSongMainItemsControl from "../ZingChartSongMainItemsControl";
// orthers
import "./style.scss";

const ZingChartSongMainItems = ({ item }) => {
  const { author } = item;
  return (
    <li className="song-item">
      <div className="song-item-nv">
        <ZingChartSongMainsItemsPosition item={item} />
        <ZingChartSongMainsItemsDes item={item} author={author} />
        <ZingChartSongMainItemsControl />
      </div>
    </li>
  );
};

export default ZingChartSongMainItems;
