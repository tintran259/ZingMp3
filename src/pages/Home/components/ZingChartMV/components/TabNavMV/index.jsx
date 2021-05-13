// libs
import React from "react";

// orthers
import "./style.scss";

export default function TabNavZingChartMV({ SongTop1 }) {
  const { author } = SongTop1;
  return (
    <>
      <ul className="body-zingchartMV-tab">
        <li>
          <a className="active" href="">
            Việt Nam
          </a>
        </li>
        <li>
          <a href="">US - UK</a>
        </li>
        <li>
          <a href="">K - Pop</a>
        </li>
      </ul>
      <div className="bg-zingchartMV">
        <img className="bg-zingchartMV" src={SongTop1.img} alt="" />
        <div className="bg-zingchartMV-dialog"></div>
        <div className="bg-zingchartMV-des">
          <span className="text">{SongTop1.position}</span>
          <div className="content">
            <span className="title">{SongTop1.title}</span>
            {author &&
              author.map((item) => (
                <span key={item.id} className="author">
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
