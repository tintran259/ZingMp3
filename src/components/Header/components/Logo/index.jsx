// libs
import React from "react";
import { Link } from "react-router-dom";

// Contants
import { PATH } from "../../../../contants";

// orthers
import "./style.scss";

const Logo = () => (
  <Link to={PATH.HOME_PAGE} className="logo">
    <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png" alt="" />
  </Link>
);

export default Logo;
