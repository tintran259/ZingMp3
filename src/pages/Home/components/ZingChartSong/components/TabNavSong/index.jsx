// libs
import React from "react";

// orthers
import "./style.scss";

export default function TabNavZingChart() {
  return (
    <>
      <ul className="body-zingchart-tab">
        <li>
          <a className="active" href="">
            Việt Nam
          </a>
        </li>
        <li>
          <a href="">US - UK</a>
        </li>
        <li>
          <a href="">K - Pop</a>
        </li>
      </ul>
      <div>
        <img className="bg-zingchart" src="https://photo-zmp3.zadn.vn/default.jpg" alt="" />
        <div className="bg-zingchart-dialog"></div>
      </div>
    </>
  );
}
