// libs
import React, { useContext } from "react";

// components
import SongVietNamListRightItems from "../SongVietNamNewestItems";

// mocks
import { albumList } from "../../../../mocks/Home";

// orthers
import "./style.scss";
import { MultiLangContext } from "../../../../context/multiLang";

const SongVietNamNewest = () => {
  const { dictionnary } = useContext(MultiLangContext);
  return (
    <div className="song-vietnam-newest-wapper">
      <h1 className="song-vietnam-newest_title">
        {dictionnary.newSongVietnam} <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <ul className="list-Song-ul">
        {albumList && albumList.map((item) => <SongVietNamListRightItems Items key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default SongVietNamNewest;
