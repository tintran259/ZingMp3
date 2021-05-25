// libs
import React from "react";
// components
import ZingChartMVMainsItemsImage from "../ZingChartMVMainsItemsImage";
import ZingChartMVMainItemsDes from "../ZingChartMVMainItemsDes";
// orthers
import "./style.scss";

const ZingChartMVMainItem = ({ item }) => {
  const { author } = item;
  return (
    <li className="list-item-MV">
      <div className="cart-MV">
        <ZingChartMVMainsItemsImage item={item} />
        <ZingChartMVMainItemsDes item={item} author={author} />
      </div>
    </li>
  );
};

export default ZingChartMVMainItem;
