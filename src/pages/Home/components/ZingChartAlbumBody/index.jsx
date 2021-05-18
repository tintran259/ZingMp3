// libs
import React from "react";

// components
import ZingChartAlbumBodyHeader from "../ZingChartAlbumBodyHeader";
import ZingChartAlbumBodyItems from "../ZingChartAlbumBodyItems";

// dataSources
import { listZingChartAlbum } from "../../../../mocks/Home";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const ablumtop1 = listZingChartAlbum[0];
  const albumrest = listZingChartAlbum.slice(1, listZingChartAlbum.length);

  return (
    <>
      <ZingChartAlbumBodyHeader ablumtop1={ablumtop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {albumrest && albumrest.map((item) => <ZingChartAlbumBodyItems key={item.id} item={item} />)}
        </ul>
      </div>
    </>
  );
}
