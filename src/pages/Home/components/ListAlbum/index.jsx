// libs
import React from "react";

// components
import ListAlbumItems from "./mains/ListAlbumItems";

// dataSources
import { albumList } from "../../../../mocks/Home";

// styles
import "./style.scss";

const ListAlbum = () => (
  <section className="list-album">
    <h1 className="list-album_title">
      ALBUM HOT <i className="fas fa-chevron-right icon-right"></i>
    </h1>
    <div className="list-album-wapper">
      {albumList && albumList.map((item) => <ListAlbumItems key={item.id} item={item} />)}
    </div>
  </section>
);

export default ListAlbum;