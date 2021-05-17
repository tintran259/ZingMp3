// libs
import React from "react";

// dataSources
import { menuVip } from "../../../../mocks/Nav";

const NavMenuVip = () => (
  <li className="li-top100">
    {menuVip &&
      menuVip.map((item) => {
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

export default NavMenuVip;
