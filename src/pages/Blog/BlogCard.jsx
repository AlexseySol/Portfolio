import React from "react";
import blog from "./Blog.module.scss";


export const BlogCard = ({title,year,text,work}) => {
  return (
    <div className={blog.card}>
<h2>{title}</h2>
<div className={blog.block} > <b>{year}</b>  <span>{work}</span> </div>
<h4>{text}</h4>
    </div>
  );
};