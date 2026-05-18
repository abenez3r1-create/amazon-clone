import React from "react";
import classes from "./category.module.css";
import { data, Link } from "react-router-dom";
function CategoryImages({ data }) {
  return (
    <>
      <div className={classes.category}>
        <Link to={`/category/${encodeURIComponent(data?.name)}`}>
          <h1>{data?.title}</h1>
          <img src={data?.image} alt="" />

          <p>shop now</p>
        </Link>
      </div>
    </>
  );
}
// console.log(data);

export default CategoryImages;
