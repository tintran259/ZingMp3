// libs
import React from "react";

// orthers
import "./style.scss";

export default function ZingChartItem({ item }) {
  const { author } = item;
  return (
    <li className="list-item-MV">
      <div className="cart-MV">
        <div className="cart-MV-bg">
          <img className="cart-MV-bg-img" src={item.img} alt="" />
          <span className="cart-MV-bg-position">{item.position}</span>
          <div className="cart-MV-bg-dialog"></div>
          <div className="cart-MV-bg-dialog2">
            <img className="cart-MV-bg-dialog2-img" src="./image/play-button.png" alt="" />
          </div>
        </div>
        <div className="cart-MV-content">
          <span className="title-MV">{item.title}</span>
          {author &&
            author.map((value) => (
              <span key={value.id} className="author-MV">
                {value.name}
              </span>
            ))}
        </div>
      </div>
    </li>
  );
}
