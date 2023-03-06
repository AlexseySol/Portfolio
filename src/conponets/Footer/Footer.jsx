import React from "react";
import footer from "./Footer.module.scss";
import { ReactComponent as Facebook } from "./fb.svg";
import { ReactComponent as Instagram } from "./insta.svg";
import { ReactComponent as Linkedin } from "./Linkedin.svg";
import { ReactComponent as Twitter } from "./twitter.svg";

export const Footer = () => {
  return (
    <footer>
      <div className={footer.wrapper}>
        <ul className={footer.social}>
          <li>
            <a href="https://uk-ua.facebook.com/">
              {" "}
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              {" "}
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=ua">
              {" "}
              <Linkedin />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              {" "}
              <Twitter />{" "}
            </a>
          </li>
        </ul>
        <h3>Copyright ©2020 All rights reserved </h3>
      </div>
    </footer>
  );
};
