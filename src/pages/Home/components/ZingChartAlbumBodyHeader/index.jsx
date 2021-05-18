// libs
import React from "react";

// components
import ZingChartAlbumBodyHeaderTav from "../ZingChartAlbumBodyHeaderTav";
import ZingChartAlbumBodyHeaderImageTop from "../ZingChartAlbumBodyHeaderImageTop";

const ZingChartAlbumBodyHeader = ({ ablumtop1 }) => (
  <>
    <ZingChartAlbumBodyHeaderTav />
    <ZingChartAlbumBodyHeaderImageTop ablumtop1={ablumtop1} />
  </>
);
export default ZingChartAlbumBodyHeader;
