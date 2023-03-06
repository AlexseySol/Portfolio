import React from "react";

import { Footer } from "../../conponets/Footer/Footer";

import { Name } from "../../conponets/Name/Name";
import { Posts } from "../../conponets/Posts/Posts";
import { Works } from "../../conponets/Works/Works";

const Home = ({ arrayWorksCard }) => {
  return (
    <div>
      <Name />
      <Posts />
      <Works arrayWorksCard={arrayWorksCard} />
      <Footer />
    </div>
  );
};

export default Home;
