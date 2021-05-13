// libs
import React from "react";

// components
import ListSongVietNamItems from "../../components/ListSongVietNamItems";

// dataSouces
import { albumList } from "../../../../../../mocks/Home";

// orthers
import "./style.scss";

const ListSongVietNamRight = () => (
  <div className="list-song-new">
    <h1 className="list-song-new_title">
      NHẠC VIỆT MỚI <i className="fas fa-chevron-right icon-right"></i>
    </h1>
    <ul className="list-Song-ul">
      {albumList && albumList.map((item) => <ListSongVietNamItems key={item.id} item={item} />)}
    </ul>
  </div>
);

export default ListSongVietNamRight;
