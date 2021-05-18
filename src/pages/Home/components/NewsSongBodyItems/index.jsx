// libs
import React from "react";

// components
import NewsSongBodyItemsImage from "../NewsSongBodyItemsImage";
import NewsSongBodyItemsContent from "../NewsSongBodyItemsContent";

// orthers
import "./style.scss";

const NewsSongItems = ({ item }) => (
  <li className="list-news-song-item-wapper">
    <div className="news-song-item">
      <NewsSongBodyItemsImage item={item} />
      <NewsSongBodyItemsContent item={item} />
    </div>
  </li>
);

export default NewsSongItems;
