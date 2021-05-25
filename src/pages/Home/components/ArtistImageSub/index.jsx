// libs
import React from "react";

// components
import ArtistItemSub from "../ArtistItemSub";
// mocks
import { artistList } from "../../../../mocks/Home";
// orthers
import "./style.scss";

const ArtistImageSub = () => (
  <div className="artist-image-sub-wrapper">
    {artistList && artistList.map((item) => <ArtistItemSub key={item.id} item={item} />)}
  </div>
);

export default ArtistImageSub;
