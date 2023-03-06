import React from "react";
import app from "./App.module.scss";

import { Header } from "./conponets/Header/Header";

import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import { Job } from "./pages/Job/Job";

function App() {
  const [activ, setActiv] = React.useState(false);

  const arrayJobsPages = [
    {
      id: 1,
      img: <img className={app.img} src="/img/Dashboards.png" alt="d" />,
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
    {
      id: 4,
      img: <img className={app.img} src="/img/Component.png" alt="d" />,
      title: "Components",
      year: "2018",
      works: "Components, Design",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  const arrayWorksCard = [
    {
      id: 1,
      img: <img className={app.img} src="/img/Dashboards.png" alt="d" />,
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
  const arrayCardBlog = [
    {
      id: 1,
      title: "UI Interactions of the week",
      year: "12 Feb 2019",
      work: "Express, Handlebars",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "UI Interactions of the week",
      year: "12 Feb 2019",
      work: "Express, Handlebars",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "UI Interactions of the week",
      year: "12 Feb 2019",
      work: "Express, Handlebars",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      title: "UI Interactions of the week",
      year: "12 Feb 2019",
      work: "Express, Handlebars",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className={app.wrapper}>
      <Header activ={activ} setActiv={setActiv} />

      <Routes>
        <Route
          element={<Blog setActiv={setActiv} arrayCardBlog={arrayCardBlog} />}
          path="Blog"
        />
        <Route
          element={<Job setActiv={setActiv} arrayJobsPages={arrayJobsPages} />}
          path="Works"
        />
        <Route element={<Home arrayWorksCard={arrayWorksCard} />} path="/" />
      </Routes>
    </div>
  );
}
export default App;
