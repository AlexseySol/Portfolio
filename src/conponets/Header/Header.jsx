import React from "react";
import header from "./Header.module.scss";
import { ReactComponent as Menu } from "./menu.svg";

export const Header = () => {
  return (
    <header className={header.wrapper}>
      <div className={header.menu}>
        <button>
          <Menu />
        </button>
      </div>
      <ul className={header.nav}>
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
</header>
  );
};
