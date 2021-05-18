// libs
import React from "react";

// components
import NewsSongBodyHeaderItemsImage from "../NewsSongBodyHeaderItemsImage";
import NewsSongBodyHeaderItemsContent from "../NewsSongBodyHeaderItemsContent";

// orthers
import "./style.scss";

const HeaderSongItems = ({ headerSong }) => (
  <div className="header-news">
    <NewsSongBodyHeaderItemsImage headerSong={headerSong} />
    <div className="header-news-dialog"></div>
    <NewsSongBodyHeaderItemsContent headerSong={headerSong} />
  </div>
);

export default HeaderSongItems;
