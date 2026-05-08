import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";
function ProductCards({ product, isCart, hideButton, renderDesc }) {
  if (!product) return null;
  const [{ basket }, dispatch] = useContext(DataContext);
  // console.log(basket);
  const { image, title, id, rating, price, description, category } = product;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product,
    });
  };
  return (
    <>
      <div
        className={
          isCart ? classes.details__container : classes.card__container
        }
      >
        <Link to={`/products/${encodeURIComponent(product?.id)}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h1>{title}</h1>
          {renderDesc && <div>{description}</div>}
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {!hideButton && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </>
  );
}

export default ProductCards;
