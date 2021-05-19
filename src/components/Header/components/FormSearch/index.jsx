// libs
import React from "react";

// orthers
import "./style.scss";

const FormSearch = () => (
  <div className="form-search-wapper">
    <input className="form-search_input" placeholder="Nhập nội dung cần tìm" />
    <span className="form-search_btn">
      <i className="fas fa-search"></i>
    </span>
  </div>
);

export default FormSearch;
