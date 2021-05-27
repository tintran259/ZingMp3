// libs
import React from "react";
// components
import FixHeaderToggle from "../FixHeaderToggle";
// orthers
import "./style.scss";

const FixHeader = () => (
  <div className="fix-header-wrapper">
    <span className="fix-header-title">Fixed Header</span>
    <FixHeaderToggle />
  </div>
);

export default FixHeader;
