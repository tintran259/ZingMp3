// libs
import React from "react";

// components
import TabNav from "../../components/TabNavMV";
import ZingChartItem from "../../components/ZingChartItemMV";

// dataSources
import { listMV } from "../../../../../../mocks/Home";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const SongTop1 = listMV[0];
  const SongList = listMV.slice(1, listMV.length);

  return (
    <>
      <TabNav SongTop1={SongTop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {SongList && SongList.map((item) => <ZingChartItem item={item} key={item.id} />)}
        </ul>
      </div>
    </>
  );
}
