// libs
import React from "react";

// components
import NavChildren from "../NavChildren";

// orthers
import "./style.scss";

const Navitems = ({ navTitle, childrenNav }) => (
  <li className="nav-items">
    <a className="zingchart_menu" href="/">
      {navTitle}
    </a>
    {childrenNav && <NavChildren childrenNav={childrenNav} />}
  </li>
);

export default Navitems;
