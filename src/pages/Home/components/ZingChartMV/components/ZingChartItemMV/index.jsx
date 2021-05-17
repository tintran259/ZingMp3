// libs
import React from "react";

// components
import ZingChartItemMVLeft from "../ZingChartItemMVLeft";
import ZingChartItemMVRight from "../ZingChartItemMVRight";

// orthers
import "./style.scss";

export default function ZingChartItem({ item }) {
  const { author } = item;
  return (
    <li className="list-item-MV">
      <div className="cart-MV">
        <ZingChartItemMVLeft item={item} />
        <ZingChartItemMVRight item={item} author={author} />
      </div>
    </li>
  );
}
