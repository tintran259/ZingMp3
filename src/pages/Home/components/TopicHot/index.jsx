// libs
import React, { useContext } from "react";
// components
import TopicHotItem from "../TopicHotItem";
// mocks
import { listTopic } from "../../../../mocks/Home";
// orthers
import "./style.scss";
// context
import { MultiLangContext } from "../../../../context/multiLang";

export default function TopicHot() {
  const { dictionnary } = useContext(MultiLangContext);
  return (
    <section className="topic-hot-wrapper">
      <h1 className="topic-hot-title">{dictionnary.topicHot}</h1>
      <ul className="list-topic">{listTopic && listTopic.map((item) => <TopicHotItem item={item} key={item.id} />)}</ul>
      <a className="view-more" href="">
        Xem thêm Chủ Đề khác
        <i className="fas fa-chevron-right icon-view-more"></i>
      </a>
    </section>
  );
}
