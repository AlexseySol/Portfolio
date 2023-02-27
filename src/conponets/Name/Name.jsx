import React from "react";
import name from "./Name.module.scss";

export const Name = () => {
  return (
    <div className={name.wrapper}>
      <div className={name.acquaintance}>
        <h1>Hi, I am John,<br /> Creative Technologist</h1>
        <h4>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h4>
        <button>Download Resume</button>
      </div>
      <div className={name.photo}>
        <img  src="/img/face.png" alt="sd" />
      </div>
    </div>
  );
};
