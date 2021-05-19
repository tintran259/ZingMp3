// libs
import React from "react";

// components
import NavItems from "../../components/NavItems";

// dataSources
import { menuItems } from "../../../../mocks/Nav";

// orthers
import "./style.scss";

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-ul">
        <li className="nav-items">
          <a className="zingchart_menu" href="/">
            <i className="fas fa-home"></i>
          </a>
        </li>
        {menuItems &&
          menuItems.map(({ id, navTitle, childrenNav }) => (
            <NavItems key={id} navTitle={navTitle} childrenNav={childrenNav} />
          ))}
      </ul>
    </nav>
  );
}
