import React from "react";
import header from "./Header.module.scss";

import { Link } from "react-router-dom";

export const BurgerMenu = ({ activ, setActiv }) => {
  return (
    <div className={header.burgerMenu_wrapper}>
      <ul>
        <Link
          onClick={() => setActiv((prev) => !prev)}
          style={{ textDecoration: "none" }}
          to={activ ? "/" : `Works`}
          className={header.burgerMenu_nav}
        >
          Works
        </Link>
        <Link
          onClick={() => setActiv((prev) => !prev)}
          style={{ textDecoration: "none" }}
          to={activ ? "/" : "Blog"}
          className={header.burgerMenu_nav}
        >
          Blog
        </Link>
        <li className={header.burgerMenu_nav}>Contact</li>
      </ul>
    </div>
  );
};
