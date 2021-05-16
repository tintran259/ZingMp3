// libs
import React from "react";

// components
import SlideItems from "./components/SlideItems";

// orthers
import "./style.scss";

const SlideThumb = ({ bannerList, hoverImage }) => {
  const handleHover = (item) => {
    // eslint-disable-next-line
    hoverImage(item);
  };
  return (
    <div className="slide-thumb">
      {bannerList && bannerList.map((item) => <SlideItems key={item.id} item={item} handleHover={handleHover} />)}
    </div>
  );
};

export default SlideThumb;
