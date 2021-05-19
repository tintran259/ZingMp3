// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartMVMainItemsDes = ({ item, author }) => (
  <div className="zing-chart-MV-main-items-des-wapper">
    <span className="title-MV">{item.title}</span>
    {author &&
      author.map((value) => (
        <span key={value.id} className="author-MV">
          {value.name}
        </span>
      ))}
  </div>
);

export default ZingChartMVMainItemsDes;
