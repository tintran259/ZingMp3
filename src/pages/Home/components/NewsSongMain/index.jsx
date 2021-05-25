// libs
import React from "react";
// components
import NewsSongMainHighlight from "../NewsSongMainHighlight";
import NewsSongMainItems from "../NewsSongMainItems";
// mocks
import { listNewsSong } from "../../../../mocks/Home";
// orthers
import "./style.scss";

const NewsSongMain = () => {
  const headerSong = listNewsSong[0];
  const SongRest = listNewsSong.slice(1, listNewsSong.length);
  return (
    <div className="news-song-main-wrapper">
      <NewsSongMainHighlight headerSong={headerSong} />
      <ul className="news-song-main-list">
        {SongRest && SongRest.map((item) => <NewsSongMainItems key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default NewsSongMain;
