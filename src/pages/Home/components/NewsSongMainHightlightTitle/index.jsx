// libs
import React from "react";
// orthers
import "./style.scss";

const NewsSongMainTitleHightlight = ({ headerSong }) => (
  <div className="news-song-main-title-hightlight">
    <a className="news-song-main-title-hightlight-text" href="/">
      {headerSong && headerSong.title}
    </a>
  </div>
);
export default NewsSongMainTitleHightlight;
