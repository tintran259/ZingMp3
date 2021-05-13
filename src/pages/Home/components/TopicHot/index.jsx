// libs
import React from "react";

// components
import TopicItem from "./components/TopicItem";

// orthers
import "./style.scss";

export default function TopicHot() {
  const listTopic = [
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg",
    },
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/cover/5/3/8/0/53801ebaa05e57320f06954927896a69.jpg",
    },
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg",
    },
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/cover/7/c/9/5/7c95f7f7eb049f6d635df1df7a8c7284.jpg",
    },
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/covers/d/0/d0f7e500d9a338062095f7f66ed669ff_1516330401.jpg",
    },
  ];
  return (
    <section className="topichot">
      <h1 className="topichot-title">Chủ đề hot</h1>
      <ul className="list-topic">{listTopic && listTopic.map((item) => <TopicItem item={item} key={item.id} />)}</ul>
      <a className="view-more" href="">
        Xem thêm Chủ Đề khác
        <i className="fas fa-chevron-right icon-view-more"></i>
      </a>
    </section>
  );
}
