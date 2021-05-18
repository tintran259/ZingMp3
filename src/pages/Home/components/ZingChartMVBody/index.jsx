// libs
import React from "react";

// components
import ZingChartMVBodyHeader from "../ZingChartMVBodyHeader";
import ZingChartMVBodyItems from "../ZingChartMVBodyItems";

// mocks
import { listMV } from "../../../../mocks/Home";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const SongTop1 = listMV[0];
  const SongList = listMV.slice(1, listMV.length);

  return (
    <>
      <ZingChartMVBodyHeader SongTop1={SongTop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {SongList && SongList.map((item) => <ZingChartMVBodyItems item={item} key={item.id} />)}
        </ul>
      </div>
    </>
  );
}
