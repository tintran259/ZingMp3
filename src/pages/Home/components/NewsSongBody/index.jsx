// libs
import React from "react";

// components
import NewsSongBodyHeaderItems from "../NewsSongBodyHeaderItems";
import NewsSongBodyItems from "../NewsSongBodyItems";

// mocks
import { listNewsSong } from "../../../../mocks/Home";

// orthers
import "./style.scss";

const BodyNewsSong = () => {
  const headerSong = listNewsSong[0];
  const SongRest = listNewsSong.slice(1, listNewsSong.length);
  return (
    <div className="body-news-song">
      <NewsSongBodyHeaderItems headerSong={headerSong} />
      <ul className="body-news-list">
        {SongRest && SongRest.map((item) => <NewsSongBodyItems key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default BodyNewsSong;
