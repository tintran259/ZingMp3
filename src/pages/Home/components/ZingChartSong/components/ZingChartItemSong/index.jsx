// libs
import React from "react";

// orthers
import "./style.scss";

export default function SongItem({ item }) {
  const { author } = item;

  return (
    <li className="song-item">
      <div className="song-item-nv">
        <h3 className={item.position && "top1"}>{item.rank}</h3>
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
        <div className="song-item-nv-control">
          <ul className="list-control">
            <li>
              <a href="/">
                <img className="icon-control" src="./image/dl.png" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-control" src="./image/add.png" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-control" src="./image/share.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
