// libs
import React from "react";
// hooks
import { useMultiColor, useMultiLang } from "../../../../hooks";
// components
import SongVietNamListRightItems from "../SongVietNamNewestItems";

// mocks
import { albumList } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const SongVietNamNewest = () => {
  const { dictionnary } = useMultiLang();
  const { currentColor } = useMultiColor();
  return (
    <div className="song-vietnam-newest-wapper">
      <h1 style={{ color: currentColor }} className="song-vietnam-newest_title">
        {dictionnary.newSongVietnam} <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <ul className="list-Song-ul">
        {albumList && albumList.map((item) => <SongVietNamListRightItems Items key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default SongVietNamNewest;
