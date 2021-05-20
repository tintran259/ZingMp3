// libs
import React from "react";

// components
import SongVietNamListRightItems from "../SongVietNamNewestItems";

// mocks
import { albumList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const SongVietNamNewest = () => (
  <div className="song-vietnam-newest-wapper">
    <h1 className="song-vietnam-newest_title">
      NHẠC VIỆT MỚI <i className="fas fa-chevron-right icon-right"></i>
    </h1>
    <ul className="list-Song-ul">
      {albumList && albumList.map((item) => <SongVietNamListRightItems Items key={item.id} item={item} />)}
    </ul>
  </div>
);

export default SongVietNamNewest;