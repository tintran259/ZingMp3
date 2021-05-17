// libs
import React from "react";

// components
import ContainerHeaderLogo from "../../components/ContainerHeaderLogo";
import ContainerHeaderSearch from "../../components/ContainerHeaderSearch";
import ContainerHeaderNav from "../../components/ContainerHeaderNav";
import ContainerHeaderButton from "../../components/ContaierHeaderButton";

// orthers
import "./style.scss";

export default function ContainerHeader() {
  return (
    <header className="header-wapper">
      <div className="container">
        <ContainerHeaderLogo />
        <ContainerHeaderSearch />
        <ContainerHeaderNav />
        <ContainerHeaderButton />
      </div>
    </header>
  );
}
