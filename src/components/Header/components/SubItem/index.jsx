// libs
import React from "react";

// orthers
import "./style.scss";

const SubItem = ({ title, navChildItems }) => (
  <ul className="subitem-wapper">
    {title && <div className="subitem-title">{title}</div>}
    <ul className="subitem-menu-ul">
      {navChildItems &&
        navChildItems.map(({ id, item }) => (
          <li className="subitem-menu-li" key={id}>
            <a href="/">{item}</a>
          </li>
        ))}
    </ul>
  </ul>
);

export default SubItem;
