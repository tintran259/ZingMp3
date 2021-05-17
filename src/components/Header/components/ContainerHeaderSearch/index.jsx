// libs
import React from "react";

// orthers
import "./style.scss";

const ContainerHeaderSearch = () => (
  <div className="form-search">
    <input className="form-search_input" placeholder="Nhập nội dung cần tìm" />
    <span className="form-search_btn">
      <i className="fas fa-search"></i>
    </span>
  </div>
);

export default ContainerHeaderSearch;
