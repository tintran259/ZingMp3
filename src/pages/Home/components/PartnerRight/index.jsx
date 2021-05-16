// libs
import React from "react";

// dataSources
import { partnerList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const PartnerRight = () => (
  <div className="partner-right-wapper">
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

export default PartnerRight;
