// libs
import React from "react";

// components
import SlideThumbItems from "../SlideThumbItems";

// orthers
import "./style.scss";

const SlideThumb = ({ bannerList, hoverImage, indexImage }) => {
  const handleHover = (item) => {
    hoverImage(item);
  };
  return (
    <div className="slide-thumb">
      {bannerList &&
        bannerList.map((item, index) => (
          <SlideThumbItems key={item.id} item={item} handleHover={handleHover} index={index} indexImage={indexImage} />
        ))}
    </div>
  );
};

export default SlideThumb;
