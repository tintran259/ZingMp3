// libs
import React from "react";

// orthers
import "./style.scss";

const ZingChartItemMVLeft = ({ item }) => (
  <div className="cart-MV-bg">
    <img className="cart-MV-bg-img" src={item.img} alt="" />
    <span className="cart-MV-bg-position">{item.position}</span>
    <div className="cart-MV-bg-dialog"></div>
    <div className="cart-MV-bg-dialog2">
      <img
        className="cart-MV-bg-dialog2-img"
        src="https://firebasestorage.googleapis.com/v0/b/massive-tuner-302208.appspot.com/o/Image%2Fplay.png?alt=media&token=ed06c612-b4d6-4b1d-9c5f-58d3c8021df5"
        alt=""
      />
    </div>
  </div>
);

export default ZingChartItemMVLeft;
