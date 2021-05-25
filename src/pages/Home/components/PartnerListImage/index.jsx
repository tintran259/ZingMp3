// libs
import React from "react";
// mocks
import { partnerList } from "../../../../mocks/Home";
// orthers
import "./style.scss";

const PartnerListImage = () => (
  <div className="partner-list-image-wrapper">
    <ul className="list-partner">
      {partnerList &&
        partnerList.map((item) => (
          <li key={item.id}>
            <img className="list-partner-img" src={item.img} alt="images" />
          </li>
        ))}
    </ul>
  </div>
);

export default PartnerListImage;
