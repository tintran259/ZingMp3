import React from "react";
import "./style.scss";

import { Row, Col } from "antd";

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-ul">
        <li>
          <a className="home" href="/">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="/">Nhạc cá nhân</a>
        </li>
        <li className="separation"></li>

        <li className="li-zingchart">
          <a className="zingchart_menu" href="/">
            #zingchart
          </a>
          <div className="children-zingchart">
            <Row>
              <Col className="subitem" span={6}>
                <div className="subitem-title">#Zingchart</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Bài hát</a>
                    </li>
                    <li>
                      <a href="/">MV</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Tuần</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Bài hát</a>
                    </li>
                    <li>
                      <a href="/">MV</a>
                    </li>
                    <li>
                      <a href="/">Album</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">US-UK chart</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Bài hát</a>
                    </li>
                    <li>
                      <a href="/">MV</a>
                    </li>
                    <li>
                      <a href="/">Album</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">kpop chart</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Bài hát</a>
                    </li>
                    <li>
                      <a href="/">MV</a>
                    </li>
                    <li>
                      <a href="/">Album</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </li>

        <li className="li-top100">
          <a href="/">Top 100</a>
          <div className="li-top100_child">
            <ul>
              <li>
                <a href="#">Việt Nam</a>
              </li>
              <li>
                <a href="#">Âu Mỹ</a>
              </li>
              <li>
                <a href="#">Châu Á</a>
              </li>
              <li>
                <a href="#">Hòa Tấu</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-zingchart">
          <a href="/">Chủ Đề</a>
          <div className="children-zingchart" style={{ width: "682px" }}>
            <Row>
              <Col className="subitem" span={6}>
                <div className="subitem-title">Để Xuất</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Nhạc HOT</a>
                    </li>
                    <li>
                      <a href="/">Những Bài HiTs Mới</a>
                    </li>
                    <li>
                      <a href="/">Nhạc Việt Bất Hủ</a>
                    </li>
                    <li>
                      <a href="/">Nhạc Bất Hủ Âu Mỹ</a>
                    </li>
                    <li>
                      <a href="/">K-Pop HITs</a>
                    </li>
                    <li>
                      <a href="/">Nhạc Thúy Nga</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Thể Loại</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">EDM</a>
                    </li>
                    <li>
                      <a href="/">Acoustic</a>
                    </li>
                    <li>
                      <a href="/">Indie</a>
                    </li>
                    <li>
                      <a href="/">Nhạc Không Lời</a>
                    </li>
                    <li>
                      <a href="/">Trữ Tình & Bolero</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Tâm Trạng</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Những Ngày Mưa</a>
                    </li>
                    <li>
                      <a href="/">Tình Yêu</a>
                    </li>
                    <li>
                      <a href="/">Buồn</a>
                    </li>
                    <li>
                      <a href="/">Thư Giãn</a>
                    </li>
                    <li>
                      <a href="/">Động Lực</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">hoạt động</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Làm Việc</a>
                    </li>
                    <li>
                      <a href="/">Yoga</a>
                    </li>
                    <li>
                      <a href="/">Cà Phê</a>
                    </li>
                    <li>
                      <a href="/">Cuối Tuần</a>
                    </li>
                    <li>
                      <a href="/">Tiệc Tùng</a>
                    </li>
                    <li>
                      <a href="/">Du lịch</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </li>
        <li className="li-zingchart">
          <a href="/">Video</a>
          <div className="children-zingchart" style={{ width: "682px" }}>
            <Row>
              <Col className="subitem" span={6}>
                <div className="subitem-title">Việt nam</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Nhạc trẻ</a>
                    </li>
                    <li>
                      <a href="/">nhạc trữ tình</a>
                    </li>
                    <li>
                      <a href="/">dance việt</a>
                    </li>
                    <li>
                      <a href="/">Rock Việt</a>
                    </li>
                    <li>
                      <a href="/">Rap / Hip Hop Việt</a>
                    </li>
                    <li>
                      <a href="/">nhạc trịnh</a>
                    </li>
                    <li>
                      <a href="/">nhạc thiếu nhi</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Âu mỹ</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Pop</a>
                    </li>
                    <li>
                      <a href="/">Rock</a>
                    </li>
                    <li>
                      <a href="/">Rap / Hip Hop</a>
                    </li>
                    <li>
                      <a href="/">Country</a>
                    </li>
                    <li>
                      <a href="/">Electronic / Dance</a>
                    </li>
                    <li>
                      <a href="/">R&B Soul</a>
                    </li>
                    <li>
                      <a href="/">Audiophile</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Châu á</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Hàn Quốc </a>
                    </li>
                    <li>
                      <a href="/">Nhật Bản</a>
                    </li>
                    <li>
                      <a href="/">Hoa Ngữ</a>
                    </li>
                    <li>
                      <a href="/">Thái lan</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">hòa tấu</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">classical</a>
                    </li>
                    <li>
                      <a href="/">piano</a>
                    </li>
                    <li>
                      <a href="/">guitar</a>
                    </li>
                    <li>
                      <a href="/">violon</a>
                    </li>
                    <li>
                      <a href="/">cello</a>
                    </li>
                    <li>
                      <a href="/">saxophone</a>
                    </li>
                    <li>
                      <a href="/">nhạc cụ dân tộc</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </li>
        <li className="li-zingchart">
          <a href="/">Album</a>
          <div className="children-zingchart" style={{ width: "682px" }}>
            <Row>
              <Col className="subitem" span={6}>
                <div className="subitem-title">Việt nam</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Nhạc trẻ</a>
                    </li>
                    <li>
                      <a href="/">nhạc trữ tình</a>
                    </li>
                    <li>
                      <a href="/">dance việt</a>
                    </li>
                    <li>
                      <a href="/">Rock Việt</a>
                    </li>
                    <li>
                      <a href="/">Rap / Hip Hop Việt</a>
                    </li>
                    <li>
                      <a href="/">nhạc trịnh</a>
                    </li>
                    <li>
                      <a href="/">nhạc thiếu nhi</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Âu mỹ</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Pop</a>
                    </li>
                    <li>
                      <a href="/">Rock</a>
                    </li>
                    <li>
                      <a href="/">Rap / Hip Hop</a>
                    </li>
                    <li>
                      <a href="/">Country</a>
                    </li>
                    <li>
                      <a href="/">Electronic / Dance</a>
                    </li>
                    <li>
                      <a href="/">R&B Soul</a>
                    </li>
                    <li>
                      <a href="/">Audiophile</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">Châu á</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">Hàn Quốc </a>
                    </li>
                    <li>
                      <a href="/">Nhật Bản</a>
                    </li>
                    <li>
                      <a href="/">Hoa Ngữ</a>
                    </li>
                    <li>
                      <a href="/">Thái lan</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={6}>
                <div className="subitem-title">hòa tấu</div>
                <div className="subitem-menu">
                  <ul>
                    <li>
                      <a href="/">classical</a>
                    </li>
                    <li>
                      <a href="/">piano</a>
                    </li>
                    <li>
                      <a href="/">guitar</a>
                    </li>
                    <li>
                      <a href="/">violon</a>
                    </li>
                    <li>
                      <a href="/">cello</a>
                    </li>
                    <li>
                      <a href="/">saxophone</a>
                    </li>
                    <li>
                      <a href="/">nhạc cụ dân tộc</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </li>
        <li className="li-top100">
          <a href="/">Nghệ Sĩ</a>
          <div className="li-top100_child">
            <ul>
              <li>
                <a href="#">Việt Nam</a>
              </li>
              <li>
                <a href="#">Âu Mỹ</a>
              </li>
              <li>
                <a href="#">Hàn Quốc</a>
              </li>
              <li>
                <a href="#">Nhật Bản</a>
              </li>
              <li>
                <a href="#">Hòa Ngữ</a>
              </li>
              <li>
                <a href="#">Hòa Tấu</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="li-top100">
          <a href="/">VIP</a>
          <div className="li-top100_child">
            <ul>
              <li>
                <a href="#">Mua VIP</a>
              </li>
              <li>
                <a href="#">Giới Thiệu VIP</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
