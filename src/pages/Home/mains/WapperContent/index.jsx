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
import { LIST_BANNER_SLIDER } from "../../../../mocks/Home";

// others
import "./style.scss";

export default function WapperContent() {
  const [imageHover, setImageHover] = useState(LIST_BANNER_SLIDER[0]);
  const hoverImage = useCallback((imgHover) => {
    setImageHover(imgHover);
  }, []);

  const initialProps = {
    LIST_BANNER_SLIDER,
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
