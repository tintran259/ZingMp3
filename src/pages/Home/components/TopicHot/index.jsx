// libs
import React from "react";

// components
import TopicHotItem from "../TopicHotItem";

// mocks
import { listTopic } from "../../../../mocks/Home";

// orthers
import "./style.scss";

export default function TopicHot() {
  return (
    <section className="topichot">
      <h1 className="topichot-title">Chủ đề hot</h1>
      <ul className="list-topic">{listTopic && listTopic.map((item) => <TopicHotItem item={item} key={item.id} />)}</ul>
      <a className="view-more" href="">
        Xem thêm Chủ Đề khác
        <i className="fas fa-chevron-right icon-view-more"></i>
      </a>
    </section>
  );
}
