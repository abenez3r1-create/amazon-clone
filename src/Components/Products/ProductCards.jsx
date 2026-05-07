import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCards({ product }) {
  if (!product) return null;
  const { image, title, id, rating, price } = product;
  return (
    <>
      <div className={classes.card__container}>
        <Link to={`/products/${encodeURIComponent(product?.id)}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h1>{title}</h1>

          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </>
  );
}

export default ProductCards;
