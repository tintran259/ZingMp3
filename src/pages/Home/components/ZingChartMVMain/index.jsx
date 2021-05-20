// libs
import React from "react";

// components
import ZingChartMVMainTav from "../ZingChartMVMainTav";
import ZingChartMVMainHightLight from "../ZingChartMVMainHightLight";
import ZingChartMVMainItems from "../ZingChartMVMainItems";

// mocks
import { listMV } from "../../../../mocks/Home";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const SongTop1 = listMV[0];
  const SongList = listMV.slice(1, listMV.length);

  return (
    <>
      <ZingChartMVMainTav />
      <ZingChartMVMainHightLight SongTop1={SongTop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {SongList && SongList.map((item) => <ZingChartMVMainItems item={item} key={item.id} />)}
        </ul>
      </div>
    </>
  );
}
