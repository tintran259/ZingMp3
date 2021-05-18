// libs
import React from "react";

// components
import ZingChartMVBodyHeaderTav from "../ZingChartMVBodyHeaderTav";
import ZingChartMVBodyHeaderImageTop from "../ZingChartMVBodyHeaderImageTop";
import ZingChartMVBodyHeaderImageDes from "../ZingChartMVBodyHeaderImageDes";

// orthers
import "./style.scss";

export default function ZingChartMVBodyHeader({ SongTop1 }) {
  const { author } = SongTop1;
  return (
    <>
      <ZingChartMVBodyHeaderTav />
      <div className="bg-zing-chart-MV">
        <ZingChartMVBodyHeaderImageTop SongTop1={SongTop1} />
        <ZingChartMVBodyHeaderImageDes SongTop1={SongTop1} author={author} />
      </div>
    </>
  );
}
