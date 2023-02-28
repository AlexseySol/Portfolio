import React from "react";
import app from "./App.module.scss";
import { Footer } from "./conponets/Footer/Footer";
import { Header } from "./conponets/Header/Header";
import { Name } from "./conponets/Name/Name";
import { Posts } from "./conponets/Posts/Posts";
import { Works } from "./conponets/Works/Works";

function App() {
  const arrayWorksCard = [
    {
      id: 1,
      img: <img  className={app.img} src="/img/Dashboards.png" alt="d" />,
      title: "Designing Dashboards",
      year: "2020",
      works: "Dashboard",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      img: <img className={app.img} src="/img/Vibrant.png" alt="d" />,
      title: "Vibrant Portraits of 2020",
      year: "2018",
      works: "Illustration",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      img: <img className={app.img} src="/img/type.png" alt="d" />,
      title: "36 Days of Malayalam type",
      year: "2018",
      works: "Typography",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

  ];

  return (
    <div className={app.wrapper}>
      <Header />
      <Name />
      <Posts />
      <Works  arrayWorksCard={arrayWorksCard}/>
      <Footer/>
    </div>
  );
}

export default App;
