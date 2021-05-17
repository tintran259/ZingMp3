// libs
import React from "react";
import { Row, Col } from "antd";

// dataSources
import { menuVideo } from "../../../../mocks/Nav";

const NavMenuVideo = () => (
  <li className="li-zingchart">
    <a href="/">Video</a>
    <div className="children-zingchart" style={{ width: "682px" }}>
      <Row>
        {menuVideo &&
          menuVideo.map((item) => {
            const { title, childItem } = item;
            return (
              <Col key={item.id} span={6}>
                <div className="subitem-title">{title}</div>
                <div className="subitem-menu">
                  <ul className="subitem-menu-ul">
                    {childItem &&
                      childItem.map((value) => (
                        <li key={value.id}>
                          <a href="/">{value.itemNav}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  </li>
);

export default NavMenuVideo;
