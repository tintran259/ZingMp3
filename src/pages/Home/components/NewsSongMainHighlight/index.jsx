// libs
import React from "react";
// components
import NewsSongMainHightlightImage from "../NewsSongMainHightlightImage";
import NewsSongMainHightlightTitle from "../NewsSongMainHightlightTitle";
// orthers
import "./style.scss";

const NewsSongMainHighlight = ({ headerSong }) => (
  <div className="news-song-main-hightlight">
    <NewsSongMainHightlightImage headerSong={headerSong} />
    <div className="news-song-main-hightlight-dialog"></div>
    <NewsSongMainHightlightTitle headerSong={headerSong} />
  </div>
);

export default NewsSongMainHighlight;
