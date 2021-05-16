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
    <footer className="footer">
      <div className="footer-wapper">
        <FooterInfor />
        <FooterRule />
        <FooterContact />
      </div>
    </footer>
  );
}
