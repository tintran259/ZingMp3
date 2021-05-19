const menuItems = [
  {
    id: Math.random(),
    navTitle: "Nhạc cá nhân",
  },
  {
    id: Math.random(),
    navTitle: "#zingchart",
    childrenNav: [
      {
        id: Math.random(),
        title: "#Zingchart",
        navChildItems: [
          {
            id: Math.random(),
            item: "Bài Hát",
          },
          {
            id: Math.random(),
            item: "MV",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Tuần",
        navChildItems: [
          {
            id: Math.random(),
            item: "Bài Hát",
          },
          {
            id: Math.random(),
            item: "MV",
          },
          {
            id: Math.random(),
            item: "Album",
          },
        ],
      },
      {
        id: Math.random(),
        title: "US-UK Chart",
        navChildItems: [
          {
            id: Math.random(),
            item: "Bài Hát",
          },
          {
            id: Math.random(),
            item: "MV",
          },
          {
            id: Math.random(),
            item: "Album",
          },
        ],
      },
      {
        id: Math.random(),
        title: "KPOP CHART",
        navChildItems: [
          {
            id: Math.random(),
            item: "Bài Hát",
          },
          {
            id: Math.random(),
            item: "MV",
          },
          {
            id: Math.random(),
            item: "Album",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "Top 100",
    childrenNav: [
      {
        id: Math.random(),
        // title: "#Zingchart",
        navChildItems: [
          {
            id: Math.random(),
            item: "Việt Nam",
          },
          {
            id: Math.random(),
            item: "Âu mỹ",
          },
          {
            id: Math.random(),
            item: "Châu Á",
          },
          {
            id: Math.random(),
            item: "Hòa Tấu",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "Chủ Đề",
    childrenNav: [
      {
        id: Math.random(),
        title: "Đề Xuất",
        navChildItems: [
          {
            id: Math.random(),
            item: "Nhạc Hot",
          },
          {
            id: Math.random(),
            item: "Những bài HiTs Mới",
          },
          {
            id: Math.random(),
            item: "Nhạc việt bất hữu",
          },
          {
            id: Math.random(),
            item: "Nhạc bất hủ âu mỹ",
          },
          {
            id: Math.random(),
            item: "K-Pops HITs",
          },
          {
            id: Math.random(),
            item: "Nhạc Thúy Nga",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Thể Loại",
        navChildItems: [
          {
            id: Math.random(),
            item: "EDM",
          },
          {
            id: Math.random(),
            item: "Ascoustic",
          },
          {
            id: Math.random(),
            item: "Indie",
          },
          {
            id: Math.random(),
            item: "Nhạc Không Lời",
          },
          {
            id: Math.random(),
            item: "Trữ Tình & Bolero",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Tâm Trạng",
        navChildItems: [
          {
            id: Math.random(),
            item: "Những Ngày Mưa",
          },
          {
            id: Math.random(),
            item: "Tình yêu",
          },
          {
            id: Math.random(),
            item: "Buồn",
          },
          {
            id: Math.random(),
            item: "Thư Giản",
          },
          {
            id: Math.random(),
            item: "Động Lực",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Hoạt Động",
        navChildItems: [
          {
            id: Math.random(),
            item: "Làm Việc",
          },
          {
            id: Math.random(),
            item: "Yoga",
          },
          {
            id: Math.random(),
            item: "Cà Phê",
          },
          {
            id: Math.random(),
            item: "Cuối tuần",
          },
          {
            id: Math.random(),
            item: "Tiệc Tùng",
          },
          {
            id: Math.random(),
            item: "Du lịch",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "Video",
    childrenNav: [
      {
        id: Math.random(),
        title: "Đề Xuất",
        navChildItems: [
          {
            id: Math.random(),
            item: "Nhạc Hot",
          },
          {
            id: Math.random(),
            item: "Những bài HiTs Mới",
          },
          {
            id: Math.random(),
            item: "Nhạc việt bất hữu",
          },
          {
            id: Math.random(),
            item: "Nhạc bất hủ âu mỹ",
          },
          {
            id: Math.random(),
            item: "K-Pops HITs",
          },
          {
            id: Math.random(),
            item: "Nhạc Thúy Nga",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Thể Loại",
        navChildItems: [
          {
            id: Math.random(),
            item: "EDM",
          },
          {
            id: Math.random(),
            item: "Ascoustic",
          },
          {
            id: Math.random(),
            item: "Indie",
          },
          {
            id: Math.random(),
            item: "Nhạc Không Lời",
          },
          {
            id: Math.random(),
            item: "Trữ Tình & Bolero",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Tâm Trạng",
        navChildItems: [
          {
            id: Math.random(),
            item: "Những Ngày Mưa",
          },
          {
            id: Math.random(),
            item: "Tình yêu",
          },
          {
            id: Math.random(),
            item: "Buồn",
          },
          {
            id: Math.random(),
            item: "Thư Giản",
          },
          {
            id: Math.random(),
            item: "Động Lực",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Hoạt Động",
        navChildItems: [
          {
            id: Math.random(),
            item: "Làm Việc",
          },
          {
            id: Math.random(),
            item: "Yoga",
          },
          {
            id: Math.random(),
            item: "Cà Phê",
          },
          {
            id: Math.random(),
            item: "Cuối tuần",
          },
          {
            id: Math.random(),
            item: "Tiệc Tùng",
          },
          {
            id: Math.random(),
            item: "Du lịch",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "Album",
    childrenNav: [
      {
        id: Math.random(),
        title: "Đề Xuất",
        navChildItems: [
          {
            id: Math.random(),
            item: "Nhạc Hot",
          },
          {
            id: Math.random(),
            item: "Những bài HiTs Mới",
          },
          {
            id: Math.random(),
            item: "Nhạc việt bất hữu",
          },
          {
            id: Math.random(),
            item: "Nhạc bất hủ âu mỹ",
          },
          {
            id: Math.random(),
            item: "K-Pops HITs",
          },
          {
            id: Math.random(),
            item: "Nhạc Thúy Nga",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Thể Loại",
        navChildItems: [
          {
            id: Math.random(),
            item: "EDM",
          },
          {
            id: Math.random(),
            item: "Ascoustic",
          },
          {
            id: Math.random(),
            item: "Indie",
          },
          {
            id: Math.random(),
            item: "Nhạc Không Lời",
          },
          {
            id: Math.random(),
            item: "Trữ Tình & Bolero",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Tâm Trạng",
        navChildItems: [
          {
            id: Math.random(),
            item: "Những Ngày Mưa",
          },
          {
            id: Math.random(),
            item: "Tình yêu",
          },
          {
            id: Math.random(),
            item: "Buồn",
          },
          {
            id: Math.random(),
            item: "Thư Giản",
          },
          {
            id: Math.random(),
            item: "Động Lực",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Hoạt Động",
        navChildItems: [
          {
            id: Math.random(),
            item: "Làm Việc",
          },
          {
            id: Math.random(),
            item: "Yoga",
          },
          {
            id: Math.random(),
            item: "Cà Phê",
          },
          {
            id: Math.random(),
            item: "Cuối tuần",
          },
          {
            id: Math.random(),
            item: "Tiệc Tùng",
          },
          {
            id: Math.random(),
            item: "Du lịch",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "Nghệ sĩ",
    childrenNav: [
      {
        id: Math.random(),
        // title: "#Zingchart",
        navChildItems: [
          {
            id: Math.random(),
            item: "Việt Nam",
          },
          {
            id: Math.random(),
            item: "Âu mỹ",
          },
          {
            id: Math.random(),
            item: "Hàn Quốc",
          },
          {
            id: Math.random(),
            item: "Nhật bản",
          },
          {
            id: Math.random(),
            item: "Hoa Ngữ",
          },
          {
            id: Math.random(),
            item: "Hòa Tấu",
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    navTitle: "VIP",
    childrenNav: [
      {
        id: Math.random(),
        // title: "#Zingchart",
        navChildItems: [
          {
            id: Math.random(),
            item: "Mua VIP",
          },
          {
            id: Math.random(),
            item: "Giới Thiệu VIP",
          },
        ],
      },
    ],
  },
];

export default menuItems;
