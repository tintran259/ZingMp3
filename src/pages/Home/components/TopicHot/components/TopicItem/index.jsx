// libs
import React from "react";

// orthers
import "./style.scss";

export default function TopicItem({ item }) {
  return (
    <li className="list-topic">
      <img className="list-toppic-img" src={item.img} alt="" />
    </li>
  );
}
