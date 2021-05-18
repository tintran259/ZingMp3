// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartItemMVRight = ({ item, author }) => (
  <div className="cart-MV-content">
    <span className="title-MV">{item.title}</span>
    {author &&
      author.map((value) => (
        <span key={value.id} className="author-MV">
          {value.name}
        </span>
      ))}
  </div>
);

export default ZingChartItemMVRight;
