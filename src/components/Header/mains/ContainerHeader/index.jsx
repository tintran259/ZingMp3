import React from "react";
import "./style.scss";

import { Link } from "react-router-dom";
import { PATH } from "../../../../contants";

export default function ContainerHeader() {
  return (
    <header className="header">
      <div className="container">
        <Link to={PATH.HOME_PAGE} className="logo">
          <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png" alt="" />
        </Link>
        <div className="form-search">
          <input className="form-search_input" placeholder="Nhập nội dung cần tìm" />
          <span className="form-search_btn">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <ul className="jumb-link">
          <li>
            <a className="active" href="#">
              MP3
            </a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">ZALO PC</a>
          </li>
        </ul>
        <div className="pull">
          <span className="btn-login">Đăng Nhập</span>
        </div>
      </div>
    </header>
  );
}
