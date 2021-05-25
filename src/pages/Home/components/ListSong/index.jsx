// libs
import React from "react";
// components
import ListSongItems from "../ListSongItems";
// mocks
import { TopicSongList } from "../../../../mocks/Home";
// styles
import "./style.scss";

export default function ListSong() {
  return (
    <section className="list-song-wrapper">
      <span className="list-song_title">Tuần mới phơi phới</span>
      <div className="list-song-main-wrapper">
        {TopicSongList && TopicSongList.map((item) => <ListSongItems key={item.id} item={item} />)}
      </div>
    </section>
  );
}
