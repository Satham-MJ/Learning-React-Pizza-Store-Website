import React from "react";
import "./Menu.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              name={menuItem.name}
              price={menuItem.price}
              image={menuItem.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
