// libs
import React from "react";

import SongItemsBoxImage from "../SongItemsBoxImage";
import SongItemsBoxTitle from "../SongItemsBoxTitle";
import SongItemsBoxControl from "../SongItemsBoxControl";

// orthers
import "./style.scss";

const SongItemsBox = ({ item }) => (
  <div className="list-item-box">
    <SongItemsBoxImage item={item} />
    <div className="box">
      <SongItemsBoxTitle item={item} />
      <SongItemsBoxControl />
    </div>
  </div>
);

export default SongItemsBox;
