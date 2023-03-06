import React from "react";
import work from "./Works.module.scss";
import { WorksCard } from "./WorksCard";

export const Works = ({ arrayWorksCard }) => {
  return (
    <div className={work.wrapper}>
      <h3 className={work.title}>Featured works</h3>

      {arrayWorksCard.map((card) => {
        return <WorksCard key={card.id} {...card} />;
      })}
    </div>
  );
};
