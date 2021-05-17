// libs
import React, { useState, useCallback, useEffect } from "react";

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
  const [imageHover] = useState(bannerList[0]);
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      if (indexImage === 4) {
        setIndexImage(0);
      } else {
        setIndexImage(indexImage + 1);
      }
    }, 4000);
    return () => {
      clearInterval(loop);
    };
  }, [indexImage]);

  const hoverImage = useCallback((index) => {
    setIndexImage(index);
  }, []);

  const initialProps = {
    bannerList,
    hoverImage,
    imageHover,
    indexImage,
  };
  return (
    <div className="content-wapper">
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
