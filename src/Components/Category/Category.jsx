import React from "react";
import CategoryInfos from "../Category/CategoryInfos";
import CategoryImages from "./CategoryImages";
import classes from "../Category/category.module.css";
function Category() {
  return (
    <div className={classes.category__container}>
      {CategoryInfos.map((Infos) => (
        <CategoryImages data={Infos} />
      ))}
    </div>
  );
}
export default Category;
