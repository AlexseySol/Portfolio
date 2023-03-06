import React from "react";
import header from "./Header.module.scss";
import { ReactComponent as Menu } from "./menu.svg";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";

export const Header = ({ activ, setActiv }) => {
  const [isMenu, setIsMenu] = React.useState(false);

  return (
    <header className={header.wrapper}>
      <div className={header.menu}>
        <button>
          <Menu onClick={() => setIsMenu((prev) => !prev)} />
        </button>
      </div>
      {isMenu ? <BurgerMenu /> : false}
      <ul className={header.nav}>
        <li>
          <Link
            onClick={() => setActiv((prev) => !prev)}
            style={{ textDecoration: "none" }}
            to={activ ? "/" : `Works`}
            className={header.nav_link}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActiv((prev) => !prev)}
            style={{ textDecoration: "none" }}
            to={activ ? "/" : "Blog"}
            className={header.nav_link}
          >
            Blog
          </Link>
        </li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

/* 

{activ ? (
  <Link to={"/"}>
    <div className={header.exit}>
      <button>
        <Exit
          onClick={handlOpen}
          className={header.svg}
        />
      </button>
    </div>
  </Link>
) : (
  false
)} */
