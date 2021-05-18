// libs
import React from "react";

// orthers
import "./style.scss";

const HeaderSongItemsImage = ({ headerSong }) => (
  <div className="header-news-bg">
    <img className="header-news-img" src={headerSong.img} alt="" />
  </div>
);

export default HeaderSongItemsImage;
