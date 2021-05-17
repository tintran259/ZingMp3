// libs
import React from "react";
import { Row, Col } from "antd";

// dataSources
import { menuZingChartList } from "../../../../mocks/Nav";

// orthers
import "./style.scss";

const NavMenuZingChart = () => (
  <li className="li-zingchart">
    <a className="zingchart_menu" href="/">
      #zingchart
    </a>
    <div className="children-zingchart">
      <Row>
        {menuZingChartList &&
          menuZingChartList.map((item) => {
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

export default NavMenuZingChart;
