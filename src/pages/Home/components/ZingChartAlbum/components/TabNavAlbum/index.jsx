// libs
import React from "react";

// orthers
import "./style.scss";

export default function TabNavZingChartMV({ ablumtop1 }) {
  return (
    <>
      <ul className="body-zingchart-album-tab">
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
      <div className="bg-zingchart-album">
        <img className="bg-zingchart-album" src={ablumtop1.img} alt="" />
        <div className="bg-zingchart-album-dialog"></div>
        <div className="bg-zingchart-album-des">
          <span className="text">{ablumtop1.position}</span>
          <div className="content">
            <span className="title">{ablumtop1.title}</span>
            <span className="author">{ablumtop1.author}</span>
          </div>
        </div>
      </div>
    </>
  );
}
