// libs
import React from "react";

// orthers
import "./style.scss";

const NewsSongMainImageHightlight = ({ headerSong }) => (
  <div className="news-song-main-image-hightlight-wapper">
    <img className="news-song-image-hightlight" src={headerSong.img} alt="" />
  </div>
);

export default NewsSongMainImageHightlight;
