// libs
import React from "react";
// orthers
import "./style.scss";

const ZingChartMVMainHightLightDes = ({ SongTop1, author }) => (
  <div className="zing-chart-MV-main-hightlight-des-wrapper">
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
);

export default ZingChartMVMainHightLightDes;
