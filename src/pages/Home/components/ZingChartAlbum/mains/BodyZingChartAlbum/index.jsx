// libs
import React from "react";

// components
import TabNav from "../../components/TabNavAlbum";
import ZingChartItem from "../../components/ZingChartItemAlbum";

// dataSources
import { listZingChartAlbum } from "../../../../../../mocks/Home";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const ablumtop1 = listZingChartAlbum[0];
  const albumrest = listZingChartAlbum.slice(1, listZingChartAlbum.length);

  return (
    <>
      <TabNav ablumtop1={ablumtop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {albumrest && albumrest.map((item) => <ZingChartItem key={item.id} item={item} />)}
        </ul>
      </div>
    </>
  );
}
