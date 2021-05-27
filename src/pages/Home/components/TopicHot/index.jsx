// libs
import React from "react";
// components
import TopicHotItem from "../TopicHotItem";
// hooks
import { useMultiLang, useSetting } from "../../../../hooks";
// mocks
import { listTopic } from "../../../../mocks/Home";
// orthers
import "./style.scss";

export default function TopicHot() {
  const { dictionnary } = useMultiLang();
  const { currentColor } = useSetting();
  return (
    <section className="topic-hot-wapper">
      <h1 style={{ color: currentColor }} className="topic-hot-title">
        {dictionnary.topicHot}
      </h1>
      <ul className="list-topic">{listTopic && listTopic.map((item) => <TopicHotItem item={item} key={item.id} />)}</ul>
      <a className="view-more" href="">
        Xem thêm Chủ Đề khác
        <i className="fas fa-chevron-right icon-view-more"></i>
      </a>
    </section>
  );
}
