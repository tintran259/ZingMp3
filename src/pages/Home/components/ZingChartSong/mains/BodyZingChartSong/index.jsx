// libs
import React from "react";

// components
import TabNavChart from "../../components/TabNavSong";
import SongItem from "../../components/ZingChartItemSong";

// orthers
import "./style.scss";

export default function BodyZingChart() {
  const ListSong = [
    {
      id: Math.random(),
      position: "active",
      rank: "01",
      title: "Vách ngọc ngà (new Version)",
      author: [
        { id: Math.random(), author: "G5RSquad" },
        { id: Math.random(), author: "Phan Anh" },
      ],
    },
    {
      id: Math.random(),
      rank: "02",
      title: "Răng Khôn ",
      author: [
        { id: Math.random(), author: "Phí Phương Anh" },
        { id: Math.random(), author: "RIN9" },
      ],
    },
    {
      id: Math.random(),
      rank: "03",
      title: "Chỉ là không cùng nhau(Live version)",
      author: [
        { id: Math.random(), author: "Tăng phúc" },
        { id: Math.random(), author: "Trương Thảo nhi" },
      ],
    },
    {
      id: Math.random(),
      rank: "04",
      title: "Lệ Duyên Tình",
      author: [
        { id: Math.random(), author: "K-ICM" },
        { id: Math.random(), author: "Long nón lá" },
      ],
    },
    {
      id: Math.random(),
      rank: "05",
      title: "Hạ còn vương nắng",
      author: [{ id: Math.random(), author: "DatKaa" }],
    },
    {
      id: Math.random(),
      rank: "06",
      title: "Khi em lớn",
      author: [
        { id: Math.random(), author: "Orange" },
        { id: Math.random(), author: "Hoàng Dũng" },
      ],
    },
    {
      id: Math.random(),
      rank: "07",
      title: "Người mình thương không thương mình",
      author: [{ id: Math.random(), author: "Anh quân idol" }],
    },
    {
      id: Math.random(),
      rank: "08",
      title: "thì ra mình rất cô đơn",
      author: [{ id: Math.random(), author: "khởi my" }],
    },
    {
      id: Math.random(),
      rank: "09",
      title: "yêu sắc yếu",
      author: [{ id: Math.random(), author: "OSAD" }],
    },
    {
      id: Math.random(),
      rank: "10",
      title: "em say rồi",
      author: [
        { id: Math.random(), author: "Thương võ" },
        { id: Math.random(), author: "ACV" },
      ],
    },
  ];
  return (
    <div className="body-zingchart">
      <TabNavChart />
      <ul className="body-zingchart-list">
        {ListSong && ListSong.map((item) => <SongItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
