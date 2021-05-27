// libs
import React from "react";
// components
import ListSongItems from "../ListSongItems";
// hooks
import { useMultiColor } from "../../../../hooks";
// mocks
import { TopicSongList } from "../../../../mocks/Home";
// styles
import "./style.scss";

export default function ListSong() {
  const { currentColor } = useMultiColor();
  return (
    <section className="list-song-wapper">
      <span style={{ color: currentColor }} className="list-song_title">
        Tuần mới phơi phới
      </span>
      <div className="list-song-main-wapper">
        {TopicSongList && TopicSongList.map((item) => <ListSongItems key={item.id} item={item} />)}
      </div>
    </section>
  );
}
