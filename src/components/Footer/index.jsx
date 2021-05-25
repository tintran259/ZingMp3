// libs
import React from "react";

// components
import FooterContact from "./mains/FooterContact";
import FooterInfor from "./mains/FooterInfor";
import FooterRule from "./mains/FooterRule";

// orthers
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <FooterInfor />
        <FooterRule />
        <FooterContact />
      </div>
    </footer>
  );
}
