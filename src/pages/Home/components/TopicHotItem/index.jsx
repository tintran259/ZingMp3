// libs
import React from "react";

// orthers
import "./style.scss";

export default function TopicItem({ item }) {
  return (
    <li className="list-topic-wapper">
      <img className="list-topic-img" src={item.img} alt="" />
    </li>
  );
}
