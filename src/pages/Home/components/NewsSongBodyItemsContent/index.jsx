// libs
import React from "react";

// orthers
import "./style.scss";

const NewsSongItemsContent = ({ item }) => (
  <div className="items-content-right">
    <span className="items-content-right-text">{item.title}</span>
  </div>
);

export default NewsSongItemsContent;
