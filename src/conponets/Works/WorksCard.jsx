import React from "react";
import work from "./Works.module.scss";

export const WorksCard = ({ img, title, works, text, year }) => {
  return (
    <div className={work.card}>
      {img}
      <div className={work.info_block}>
        <h1 className={work.info_title}>{title}</h1>
        <div className={work.block_wokrs}>
          <span>{year}</span>
          {works}
        </div>
        <h3>{text}</h3>
      </div>
    </div>
  );
};
