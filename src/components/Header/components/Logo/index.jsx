// libs
import React from "react";
import { Link } from "react-router-dom";
// Contants
import CONTANTS from "../../../../contants";
// orthers
import "./style.scss";

const { PATH } = CONTANTS;
const Logo = () => (
  <Link to={PATH.HOME_PAGE} className="logo">
    <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png" alt="" />
  </Link>
);

export default Logo;
