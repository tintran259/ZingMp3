// libs
import React from "react";
import { Row, Col } from "antd";

// dataSources
import { menuTopic } from "../../../../mocks/Nav";

const NavMenuTopic = () => (
  <li className="li-zingchart">
    <a href="/">Chủ Đề</a>
    <div className="children-zingchart" style={{ width: "682px" }}>
      <Row>
        {menuTopic &&
          menuTopic.map((item) => {
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

export default NavMenuTopic;
