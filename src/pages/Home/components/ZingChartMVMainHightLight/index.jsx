// libs
import React from "react";

// components
import ZingChartMVMainHightLightImage from "../ZingChartMVMainHightLightImage";
import ZingChartMVMainHightLightDes from "../ZingChartMVMainHightLightDes";

// orthers
import "./style.scss";

const ZingChartAlbumMainHightLight = ({ SongTop1 }) => {
  const { author } = SongTop1;
  return (
    <div className="zing-chart-MV-main-hightlight-wapper">
      <ZingChartMVMainHightLightImage SongTop1={SongTop1} />
      <ZingChartMVMainHightLightDes SongTop1={SongTop1} author={author} />
    </div>
  );
};
export default ZingChartAlbumMainHightLight;
