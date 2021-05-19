// libs
import React from "react";

// components
import Logo from "../../components/Logo";
import FormSearch from "../../components/FormSearch";
import MenuHeader from "../../components/MenuHeader";
import ButtonLogin from "../../components/ButtonLogin";

// orthers
import "./style.scss";

export default function ContainerHeader() {
  return (
    <header className="container-header-wapper">
      <div className="container">
        <Logo />
        <FormSearch />
        <MenuHeader />
        <ButtonLogin />
      </div>
    </header>
  );
}
