// libs
import React from "react";

// components
import ArtistItemSub from "../ArtistItemSub";

// dataSources
import { artistList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const ArtistImageSub = () => (
  <div className="artist-image-sub-wapper">
    {artistList && artistList.map((item) => <ArtistItemSub key={item.id} item={item} />)}
  </div>
);

export default ArtistImageSub;
