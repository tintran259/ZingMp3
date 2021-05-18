// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartMVBodyHeaderImageDes = ({ SongTop1, author }) => (
  <div className="bg-zing-chart-MV-des">
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

export default ZingChartMVBodyHeaderImageDes;
