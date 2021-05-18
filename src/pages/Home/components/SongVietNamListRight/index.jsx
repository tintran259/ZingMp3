// libs
import React from "react";

// components
import SongVietNamListRightItems from "../SongVietNamListRightItems";

// dataSouces
import { albumList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const SongVietNamListRight = () => (
  <div className="list-song-new">
    <h1 className="list-song-new_title">
      NHẠC VIỆT MỚI <i className="fas fa-chevron-right icon-right"></i>
    </h1>
    <ul className="list-Song-ul">
      {albumList && albumList.map((item) => <SongVietNamListRightItems key={item.id} item={item} />)}
    </ul>
  </div>
);

export default SongVietNamListRight;
