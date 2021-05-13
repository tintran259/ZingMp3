// libs
import React from "react";

// orthers
import "./style.scss";

const HeaderSongItems = ({ headerSong }) => {
  console.log("headerSong newsSong:", headerSong);
  return (
    <div className="header-news">
      <div className="header-news-bg">
        <img className="header-news-img" src={headerSong.img} alt="" />
      </div>
      <div className="header-news-dialog"></div>
      <div className="header-news-content">
        <a className="header-news-content-text" href="/">
          {headerSong.title}
        </a>
      </div>
    </div>
  );
};

export default HeaderSongItems;
