// libs
import React from "react";

// orthers
import "./style.scss";

const NewsSongItems = ({ item }) => (
  <li className="list-news-song-item">
    <div className="news-song-item">
      <div className="items-content-left">
        <img className="items-content-left-img" src={item.img} alt="" />
        <div className="items-contents-left-dialog"></div>
      </div>
      <div className="items-content-right">
        <span className="items-content-right-text">{item.title}</span>
      </div>
    </div>
  </li>
);

export default NewsSongItems;
