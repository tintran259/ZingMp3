// libs
import React from "react";
import { Switch } from "antd";
// hooks
import { useMultiColor } from "../../../../hooks";
// orthers
import "./style.scss";

const FixHeaderToggle = () => {
  const { isFixed, setIsFixed } = useMultiColor();
  const handleSwitch = () => {
    setIsFixed(!isFixed);
  };
  return (
    <div className="fix-header-toggle">
      <Switch onChange={handleSwitch} size="small"></Switch>
    </div>
  );
};

export default FixHeaderToggle;
