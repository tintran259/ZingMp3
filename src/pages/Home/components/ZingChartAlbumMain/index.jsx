// libs
import React from "react";

// components
import ZingChartAlbumMainHightLight from "../ZingChartAlbumMainHightLight";
import ZingChartAlbumMainItems from "../ZingChartAlbumMainItems";
import ZingChartAlbumMainTav from "../ZingChartAlbumMainTav";

// mocks
import { listZingChartAlbum } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const ZingChartAlbumMain = () => {
  const ablumtop1 = listZingChartAlbum[0];
  const albumrest = listZingChartAlbum.slice(1, listZingChartAlbum.length);

  return (
    <div className="zing-chart-album-main-wapper">
      <ZingChartAlbumMainTav />
      <ZingChartAlbumMainHightLight ablumtop1={ablumtop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {albumrest && albumrest.map((item) => <ZingChartAlbumMainItems key={item.id} item={item} />)}
        </ul>
      </div>
    </div>
  );
};

export default ZingChartAlbumMain;
