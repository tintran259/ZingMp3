// libs
import React from "react";

// orthers
import "./style.scss";

const FooterContact = () => (
  <div className="footer-contact-wapper">
    <ul className="footer-contact-media">
      <li className="media"></li>
      <li className="media">
        <span className="icon-media">
          <i className="fab fa-facebook-f icon-contact"></i>
        </span>
      </li>
      <li className="media">
        <span className="icon-media">
          <i className="fab fa-google-plus-g icon-contact"></i>
        </span>
      </li>
      <li className="media">
        <span className="icon-media">
          <i className="fab fa-google-plus-g icon-contact"></i>
        </span>
      </li>
      <li className="media">
        <span className="icon-media">
          <i className="fab fa-youtube icon-contact"></i>
        </span>
      </li>
    </ul>
    <div className="footer-contact-badge">
      <img
        src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=62f851ba-0cde-4801-8326-68a6d66bf97a"
        alt="logo"
      />
    </div>
    <div className="footer-contact-mobile">
      <span className="contact-mobile">Phiên bản Mobile</span>
    </div>
  </div>
);

export default FooterContact;
