// libs
import React from "react";

// components
import ListVideoItems from "./mains/ListVideoItems";

// dataSources
import { videoSongList } from "../../../../mocks/Home";

// styles
import "./style.scss";

export default function ListVideo() {
  return (
    <section className="list-video">
      <h1 className="list-video_title">
        VIDEO HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-video-wapper">
        {videoSongList && videoSongList.map((item) => <ListVideoItems key={item.id} item={item} />)}
      </div>
    </section>
  );
}
