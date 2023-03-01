import React from "react";
import job from "./Job.module.scss";

export const JobCard = ({ title, year, text, works, img }) => {
  return (
    <div className={job.card}>
      {img}
      <div className={job.card_block} >
        <h2>{title}</h2>
        <div className={job.block}>
          {" "}
          <b>{year}</b> <span>{works}</span>{" "}
        </div>
        <h4>{text}</h4>
      </div>
    </div>
  );
};
