// libs
import React from "react";

// components
import SubItem from "../SubItem";

// orthers
import "./style.scss";

const NavChildren = ({ childrenNav }) => (
  <div className="nav-children-wapper">
    {childrenNav &&
      childrenNav.map(({ id, title, navChildItems }) => (
        <SubItem key={id} title={title} navChildItems={navChildItems} />
      ))}
  </div>
);

export default NavChildren;
