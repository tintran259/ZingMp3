// libs
import React from "react";
// components
import ContainerHeader from "./mains/ContainerHeader";
import NavMenu from "./mains/NavMenu";
// orthers
import "./style.scss";

export default function Header() {
  return (
    <section className="header-wrapper">
      <ContainerHeader />
      <NavMenu />
    </section>
  );
}
