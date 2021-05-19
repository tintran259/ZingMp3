// libs
import React from "react";

// components
import NewsSongMainItemsImage from "../NewsSongMainItemsImage";
import NewsSongMainItemsTitle from "../NewsSongMainItemsTitle";

// orthers
import "./style.scss";

const NewsSongMainItems = ({ item }) => (
  <li className="news-song-main-item-wapper">
    <div className="news-song-item">
      <NewsSongMainItemsImage item={item} />
      <NewsSongMainItemsTitle item={item} />
    </div>
  </li>
);

export default NewsSongMainItems;
