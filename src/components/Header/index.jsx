import React from "react";
import "./style.scss";

import ContainerHeader from "./mains/ContainerHeader";
import NavMenu from "./mains/NavMenu";

export default function Header() {
  return (
    <section className="header-wrapper">
      <ContainerHeader />
      <NavMenu />
    </section>
  );
}
