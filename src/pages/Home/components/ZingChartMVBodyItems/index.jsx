// libs
import React from "react";

// components
import ZingChartMVBodyItemsImage from "../ZingChartMVBodyItemsImage";
import ZingChartMVBodyItemsContent from "../ZingChartMVBodyItemsContent";

// orthers
import "./style.scss";

export default function ZingChartItem({ item }) {
  const { author } = item;
  return (
    <li className="list-item-MV">
      <div className="cart-MV">
        <ZingChartMVBodyItemsImage item={item} />
        <ZingChartMVBodyItemsContent item={item} author={author} />
      </div>
    </li>
  );
}
