// libs
import React from "react";

// dataSources
import { menuArtist } from "../../../../mocks/Nav";

const NavMenuArtist = () => (
  <li className="li-top100">
    {menuArtist &&
      menuArtist.map((item) => {
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

export default NavMenuArtist;
