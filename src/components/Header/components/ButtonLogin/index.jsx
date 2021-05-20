// libs
import React, { useContext } from "react";

// orthers
import "./style.scss";

import { MultiLangContext } from "../../../../context/multiLang";

const ButtonLogin = () => {
  const { dictionnary } = useContext(MultiLangContext);
  return (
    <div className="btn-login-wapper">
      <span className="btn-login">{dictionnary.login}</span>
    </div>
  );
};

export default ButtonLogin;
