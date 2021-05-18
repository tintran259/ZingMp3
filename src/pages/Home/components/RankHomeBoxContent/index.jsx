// libs
import React from "react";

// components
import RankHomeBoxItemsImage from "../RankHomeBoxItemsImage";
import RankHomeBoxItemsTitle from "../RankHomeBoxItemsTitle";
import RankHomeBoxItemsControl from "../RankHomeBoxItemsControl";

// orthers
import "./style.scss";

const SongItemsBox = ({ item }) => (
  <div className="list-item-box">
    <RankHomeBoxItemsImage item={item} />
    <div className="box">
      <RankHomeBoxItemsTitle item={item} />
      <RankHomeBoxItemsControl />
    </div>
  </div>
);

export default SongItemsBox;
