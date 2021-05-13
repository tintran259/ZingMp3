// libs
import React from "react";

// components
import SlideItems from "./components/SlideItems";

// orthers
import "./style.scss";

const SlideThumb = ({ LIST_BANNER_SLIDER, hoverImage }) => {
  const handleHover = (item) => {
    // eslint-disable-next-line
    hoverImage(item);
  };
  return (
    <div className="slide-thumb">
      {LIST_BANNER_SLIDER && LIST_BANNER_SLIDER.map((item) => <SlideItems item={item} handleHover={handleHover} />)}
    </div>
  );
};

export default SlideThumb;
