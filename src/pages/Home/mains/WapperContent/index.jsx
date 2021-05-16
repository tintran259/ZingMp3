// libs
import React, { useState, useCallback } from "react";

// components
import SlideHome from "../../components/Slidebar";
import SlideThumb from "../../components/SlideThumb";
import RankHome from "../../components/RankHome";
import ListSong from "../../components/ListSong";
import ListVideo from "../../components/ListVideo";
import ListAlbum from "../../components/ListAlbum";
import SongVietNamese from "../../components/SongVietNamese";

import Artlist from "../../components/Artlist";

// dataSources
import { bannerList } from "../../../../mocks/Home";

// others
import "./style.scss";

export default function WapperContent() {
  const [imageHover, setImageHover] = useState(bannerList[0]);
  const hoverImage = useCallback((imgHover) => {
    setImageHover(imgHover);
  }, []);

  const initialProps = {
    bannerList,
    hoverImage,
    imageHover,
  };
  return (
    <div className="Wapper-Content">
      <SlideHome {...initialProps} />
      <SlideThumb {...initialProps} />
      <RankHome />
      <ListSong />
      <ListVideo />
      <ListAlbum />
      <SongVietNamese />
      <Artlist />
    </div>
  );
}
