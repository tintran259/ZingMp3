// libs
import React from "react";
// orthers
import "./style.scss";

const ZingChartItemSongContent = ({ item, author }) => (
  <div className="song-item-nv-des">
    <div>
      <a href="/" className={`song-item-nv-title ${item.position && "top1"}`}>
        {item.title}
      </a>
    </div>
    {author.length > 0 ? (
      author.map((i) => (
        <span key={i.id} className={`author-1 ${item.position && "top1"} `}>
          {i.author}
        </span>
      ))
    ) : (
      <span className="author-1">{author[0].author}</span>
    )}
  </div>
);

export default ZingChartItemSongContent;
