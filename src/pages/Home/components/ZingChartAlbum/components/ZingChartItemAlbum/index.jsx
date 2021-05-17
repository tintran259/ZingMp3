// libs
import React from "react";

// components
import ZingChartItemAlbumLeft from "../ZingChartItemAlbumLeft";
import ZingChartItemAlbumRight from "../ZingChartItemAlbumRight";

// orthers
import "./style.scss";

export default function ZingChartItemAlbum({ item }) {
  return (
    <li className="list-item-Album">
      <div className="album-item-zing">
        <ZingChartItemAlbumLeft item={item} />
        <ZingChartItemAlbumRight item={item} />
      </div>
    </li>
  );
}
