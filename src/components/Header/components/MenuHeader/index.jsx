// libs
import React from "react";
// orthers
import "./style.scss";

const MenuHeader = () => (
  <ul className="menu-header-wrapper">
    <li>
      <a className="active" href="#">
        MP3
      </a>
    </li>
    <li>
      <a href="#">NEWS</a>
    </li>
    <li>
      <a href="#">TV</a>
    </li>
    <li>
      <a href="#">ZALO PC</a>
    </li>
  </ul>
);

export default MenuHeader;
