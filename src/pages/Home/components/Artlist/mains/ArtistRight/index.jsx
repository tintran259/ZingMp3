// libs
import React from "react";

// components
import ArtistItemsList from "../../components/ArtistItemList";

// dataSources
import { artistList } from "../../../../../../mocks/Home";

// orthers
import "./style.scss";

const ArtistRight = () => (
  <div className="artist-wapper-right">
    {artistList && artistList.map((item) => <ArtistItemsList key={item.id} item={item} />)}
  </div>
);

export default ArtistRight;
