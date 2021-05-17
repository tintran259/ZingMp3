// libs
import React from "react";

// dataSources
import { menuTop100 } from "../../../../mocks/Nav";

// orthers
import "./style.scss";

const NavMenuTop100 = () => (
  <li className="li-top100">
    {menuTop100 &&
      menuTop100.map((item) => {
        const { title, childMenu } = item;
        return (
          <div className="li-top100-nav" key={item.id}>
            <a href="/">{title}</a>
            <div className="li-top100_child">
              <ul>
                {childMenu &&
                  childMenu.map((value) => (
                    <li key={value.id}>
                      <a href="#">{value.itemNav}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        );
      })}
  </li>
);

export default NavMenuTop100;
