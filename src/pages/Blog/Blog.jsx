import React from "react";
import blog from "./Blog.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Exit } from "./10.svg";
import { BlogCard } from "./BlogCard";
import { Footer } from "../../conponets/Footer/Footer";

export const Blog = ({ arrayCardBlog, setActiv }) => {
  return (
    <div className={blog.wrapper}>
      <h1>Blog</h1>
      <Link to={"/"}>
        <div className={blog.exit}>
          <button>
            <Exit
              onClick={() => setActiv((prev) => !prev)}
              className={blog.svg}
            />
          </button>
        </div>
      </Link>

      {arrayCardBlog.map((card) => {
        return <BlogCard key={card.id} {...card} />;
      })}

      <Footer />
    </div>
  );
};
