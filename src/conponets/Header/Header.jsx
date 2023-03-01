import React from "react";
import header from "./Header.module.scss";
import { ReactComponent as Menu } from "./menu.svg";
import { Link} from "react-router-dom";

export const Header = ({activ,open}) => {


  return (
    <header className={header.wrapper}>
      <div className={header.menu}>
        <button>
          <Menu />
        </button>
      </div>
      
      <ul className={header.nav}>
        <li><Link onClick={open} style={{ textDecoration: 'none'}}  className={activ ? header.link : header.nav_link }  to="Works">Works</Link></li>
        <li><Link onClick={open} style={{ textDecoration: 'none'}}  className={activ ? header.link : header.nav_link }  to="Blog">Blog</Link></li>
        <li>Contact</li>
      </ul>
</header>
  );
};
