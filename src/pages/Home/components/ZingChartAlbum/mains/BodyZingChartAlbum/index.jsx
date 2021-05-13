// libs
import React from "react";

// components
import TabNav from "../../components/TabNavAlbum";
import ZingChartItem from "../../components/ZingChartItemAlbum";

// orthers
import "./style.scss";

export default function BodyZingChartMV() {
  const ListZingChartAlbum = [
    {
      id: Math.random(),
      img: "https://photo-zmp3.zadn.vn/banner/9/a/0/4/9a04b16efa00ce7493dba02399cb3f8d.jpg",
      title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 7+8",
      author: "Nhiều nghệ sĩ",
      position: "01",
    },
    {
      id: Math.random(),
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/8/5/e/685e1dbcc1c558aab9e290f70aae8b2b.jpg",
      title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 9+10",
      author: "Nhiều nghệ sĩ",
      position: "02",
    },
    {
      id: Math.random(),
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/d/f/7/7df7cf2a31cb35a945e61a870be5556a.jpg",
      title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 5+6",
      author: "Nhiều nghệ sĩ",
      position: "03",
    },
    {
      id: Math.random(),
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/0/8/7/2087a9ffe7a35c22f1efa212d57b0d72.jpg",
      title: "Xuân Hạ Thu Đông, rồi lại Xuân - Tập 3+4",
      author: "Nhiều nghệ sĩ",
      position: "04",
    },
    {
      id: Math.random(),
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/a/9/a/da9a8995a4a7fea43459f5881cb4af14.jpg",
      title: "dreAMEE",
      author: "AMEE",
      position: "05",
    },
  ];

  const ablumtop1 = ListZingChartAlbum[0];
  const albumrest = ListZingChartAlbum.slice(1, ListZingChartAlbum.length);

  return (
    <>
      <TabNav ablumtop1={ablumtop1} />
      <div className="body-zing-chart">
        <ul className="list-zing-chart">
          {albumrest && albumrest.map((item) => <ZingChartItem key={item.id} item={item} />)}
        </ul>
      </div>
    </>
  );
}
