// libs
import React from "react";

// components
import NavMenuLogoHome from "../../components/NavMenuLogoHome";
import NavMenuSongPrivite from "../../components/NavMenuSongPrivite";
import NavMenuZingChart from "../../components/NavMenuZingChart";
import NavMenuTop100 from "../../components/NavMenuTop100";
import NavMenuTopic from "../../components/NavMenuTopic";
import NavMenuVideo from "../../components/NavMenuVideo";
import NavMenuAlbum from "../../components/NavMenuAlbum";
import NavMenuArtist from "../../components/NavMenuArtist";
import NavMenuVip from "../../components/NavMenuVip";

// orthers
import "./style.scss";

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-ul">
        <NavMenuLogoHome />
        <NavMenuSongPrivite />
        <li className="separation"></li>
        <NavMenuZingChart />
        <NavMenuTop100 />
        <NavMenuTopic />
        <NavMenuVideo />
        <NavMenuAlbum />
        <NavMenuArtist />
        <NavMenuVip />
      </ul>
    </nav>
  );
}
