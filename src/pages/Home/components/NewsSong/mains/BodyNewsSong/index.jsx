// libs
import React from "react";

// components
import HeaderSongItems from "../../components/HeaderSongItems";
import NewsSongItems from "../../components/NewsSongItems";

// orthers
import "./style.scss";

const BodyNewsSong = () => {
  const listNewsSong = [
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2021_05_08/1.jpg",
      title: "MV 'Love Rosie': Thiều Bảo Trâm quá trẻ con?",
    },
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2021_04_22/2.jpg",
      title: "K-ICM ngày càng âm thầm?",
    },
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2021_04_20/avathaonhi.jpg",
      title: "Vì sao ca khúc nhạc Hoa lời Việt ‘Chỉ là không cùng nhau’ thành hit?",
    },
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/qfssu/2021_04_15/tang_phuc_1731_1617422452_1.jpg",
      title: "Vì sao ca khúc nhạc Hoa lời Việt sau 30 năm vẫn được yêu thích?",
    },
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/qfssu/2021_04_04/avarik2.jpg",
      title: "Karik bị ngã trên sân khấu, phải nhờ bảo vệ bế vào hậu trường",
    },
    {
      id: Math.random(),
      img: "https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2021_03_17/2.jpg",
      title: "Nhạc Việt có cần một Hoàng Thùy Linh thứ hai?",
    },
  ];

  const headerSong = listNewsSong[0];
  const SongRest = listNewsSong.slice(1, listNewsSong.length);
  return (
    <div className="body-news-song">
      <HeaderSongItems headerSong={headerSong} />
      <ul className="body-news-list">
        {SongRest && SongRest.map((item) => <NewsSongItems key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default BodyNewsSong;
