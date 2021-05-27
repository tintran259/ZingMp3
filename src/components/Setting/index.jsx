// libs
import React, { useState, useEffect } from "react";
// components
import ButtonSetting from "./mains/ButtonSetting";
import SettingContent from "./mains/SettingContent";
// orthers
import "./style.scss";

const SectionSetting = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (isShow) {
      document.querySelector("body").classList.add("scrolling-effect");
    } else {
      document.querySelector("body").classList.remove("scrolling-effect");
    }
  }, [isShow]);
  const handleOpenSetting = () => {
    setIsShow(true);
  };
  const handleCloseSetting = () => {
    setIsShow(false);
  };

  const initialProps = {
    isShow,
    handleCloseSetting,
    handleOpenSetting,
  };
  return (
    <div className="drawer-wapper">
      <div onClick={handleCloseSetting} className={`drawer-mask ${isShow ? "drawer-mask-open" : ""}`}></div>
      <div className="drawer-content-wrapper" style={isShow ? {} : { transform: "translateX(100%)" }}>
        <ButtonSetting {...initialProps} />
        <SettingContent />
      </div>
    </div>
  );
};

export default SectionSetting;
