// libs
import React, { useContext } from "react";
// components
import Logo from "../../components/Logo";
import FormSearch from "../../components/FormSearch";
import MenuHeader from "../../components/MenuHeader";
import ButtonLogin from "../../components/ButtonLogin";
// orthers
import "./style.scss";
import { MultiLangContext } from "../../../../context/multiLang";

export default function ContainerHeader() {
  const { handleChangeVN, handleChangeEN } = useContext(MultiLangContext);
  return (
    <header className="container-header-wrapper">
      <div className="container">
        <Logo />
        <FormSearch />
        <MenuHeader />
        <ButtonLogin />
      </div>
      <span className="language-wrapper">
        <button onClick={handleChangeEN} className="btn-lang" type="button">
          EN
        </button>
        <button onClick={handleChangeVN} className="btn-lang" type="button">
          VN
        </button>
      </span>
    </header>
  );
}
