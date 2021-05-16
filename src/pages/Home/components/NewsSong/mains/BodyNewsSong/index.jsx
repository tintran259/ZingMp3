// libs
import React from "react";

// components
import HeaderSongItems from "../../components/HeaderSongItems";
import NewsSongItems from "../../components/NewsSongItems";

// dataSources
import { listNewsSong } from "../../../../../../mocks/Home";

// orthers
import "./style.scss";

const BodyNewsSong = () => {
  const headerSong = listNewsSong[0];
  const SongRest = listNewsSong.slice(1, listNewsSong.length);
  return (
    <div className="body-news-song">
      <HeaderSongItems headerSong={headerSong} />
      <ul className="body-news-list">
        {SongRest && SongRest.map((item) => <NewsSongItems key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default BodyNewsSong;
