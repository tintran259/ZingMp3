// libs
import React from "react";
// hooks
import { useMultiColor } from "../../../../hooks";
// orthers
import "./style.scss";

const ButtonSetting = ({ isShow, handleCloseSetting, handleOpenSetting }) => {
  const { currentColor } = useMultiColor();
  return (
    <div className="btn-setting-drawer-handle">
      {isShow ? (
        <button
          style={{ backgroundColor: currentColor }}
          className="btn-setting"
          type="button"
          onClick={handleCloseSetting}
        >
          <i className="fas fa-times icon-setting"></i>
        </button>
      ) : (
        <button
          style={{ backgroundColor: currentColor }}
          className="btn-setting"
          type="button"
          onClick={handleOpenSetting}
        >
          <i className="fas fa-cog icon-setting"></i>
        </button>
      )}
    </div>
  );
};

export default ButtonSetting;
