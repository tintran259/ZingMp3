// libs
import React from "react";

// components
import ZingChartAlbumBodyItemsContent from "../ZingChartAlbumBodyItemsContent";
import ZingChartAlbumBodyItemsImage from "../ZingChartAlbumBodyItemsImage";

// orthers
import "./style.scss";

export default function ZingChartAlbumBodyItems({ item }) {
  return (
    <li className="list-item-album-wapper">
      <div className="album-item-zing">
        <ZingChartAlbumBodyItemsImage item={item} />
        <ZingChartAlbumBodyItemsContent item={item} />
      </div>
    </li>
  );
}
