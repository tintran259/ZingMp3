// libs
import React from "react";
// hooks
import { useMultiColor } from "../../../../hooks";
// components
import Logo from "../../components/Logo";
import FormSearch from "../../components/FormSearch";
import MenuHeader from "../../components/MenuHeader";
import ButtonLogin from "../../components/ButtonLogin";
// styled-components
import { StyledHeader } from "./StyledContainerHeader";
// orthers
import "./style.scss";

export default function ContainerHeader() {
  const { currentColor, isFixed } = useMultiColor();
  return (
    <StyledHeader isShow={isFixed} className="container-header-wapper" style={{ backgroundColor: currentColor }}>
      <div className="container">
        <Logo />
        <FormSearch />
        <MenuHeader />
        <ButtonLogin />
      </div>
    </StyledHeader>
  );
}
