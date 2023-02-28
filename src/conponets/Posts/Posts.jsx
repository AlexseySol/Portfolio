import React from "react";
import posts from "./Posts.module.scss";

export const Posts = () => {
  return (
    <div className={posts.bacground}>
      <div className={posts.wrapper}>
        <div className={posts.header}>
          <div>Recent posts</div>
          <div>View all</div>
        </div>
        <div className={posts.content}>
          <div className={posts.post}>
            <h1 className={posts.title}>
              {" "}
              Making a design system from scratch
            </h1>
            <div className={posts.data}>
              <span>12 Feb 2020</span> <b>Design, Pattern</b>
            </div>
            <h4 className={posts.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </h4>
          </div>
          <div className={posts.post}>
            <h1 className={posts.title}>
              {" "}
              Creating pixel perfect icons in Figma
            </h1>
            <div className={posts.data}>
              <span>12 Feb 2020</span> <b>Figma, Icon Design</b>
            </div>
            <h4 className={posts.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
