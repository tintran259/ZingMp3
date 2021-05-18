// libs
import React from "react";

// orthers
import "./style.scss";

const HeaderSongItemsContent = ({ headerSong }) => (
  <div className="header-news-content">
    <a className="header-news-content-text" href="/">
      {headerSong && headerSong.title}
    </a>
  </div>
);
export default HeaderSongItemsContent;
