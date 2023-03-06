import React from "react";
import job from "./Job.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Exit } from "../Blog/10.svg";
import { JobCard } from "./JobCard";
import { Footer } from "../../conponets/Footer/Footer";

export const Job = ({ setActiv, arrayJobsPages }) => {
  return (
    <div className={job.wrapper}>
      <h1>Works</h1>
      <Link to={"/"}>
        <div className={job.exit}>
          <button>
            <Exit onClick={() => setActiv(false)} className={job.svg} />
          </button>
        </div>
      </Link>
      {arrayJobsPages.map((card) => {
        return <JobCard key={card.id} {...card} />;
      })}
      <Footer />
    </div>
  );
};
