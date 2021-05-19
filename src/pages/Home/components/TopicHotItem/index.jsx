// libs
import React from "react";

// orthers
import "./style.scss";

const TopicHotItem = ({ item }) => (
  <li className="topic-hot-item-wapper">
    <img className="topic-hot-item-img" src={item.img} alt="" />
  </li>
);

export default TopicHotItem;
