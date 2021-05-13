// libs
import React from "react";

// components
import HeaderNewsSong from "./mains/HeaderNewsSong";
import BodyNewsSong from "./mains/BodyNewsSong";

// orthers
import "./style.scss";

export default function NewsSong() {
  return (
    <section className="newsSong">
      <HeaderNewsSong />
      <BodyNewsSong />
    </section>
  );
}
