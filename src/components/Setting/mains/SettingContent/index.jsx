// libs
import React from "react";
// components
import Language from "../../components/Language";
import ThemeColor from "../../components/ThemeColor";
import FixHeader from "../../components/FixHeader";
// orthers
import "./style.scss";

const SettingContent = () => (
  <div className="drawer-content-inner">
    <Language />
    <ThemeColor />
    <FixHeader />
  </div>
);
export default SettingContent;
