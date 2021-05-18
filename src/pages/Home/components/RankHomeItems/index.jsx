// libs
import React from "react";

// components
import RankHomeItemsPosition from "../RankHomeItemsPosition";
import RankHomeBoxContent from "../RankHomeBoxContent";

// orthers
import "./style.scss";

const SongRankItems = ({ item }) => (
  <li>
    <div className="list-item">
      <RankHomeItemsPosition item={item} />
      <span className="list-item-line"></span>
      <RankHomeBoxContent item={item} />
    </div>
  </li>
);
export default SongRankItems;
