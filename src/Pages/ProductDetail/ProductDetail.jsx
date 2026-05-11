import React, { useState, useEffect, useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCards from "../../Components/Products/ProductCards";
import classes from "./productdetail.module.css";
import axios from "axios";
import productUrl from "../../API/Api";
import { Type } from "../../Utility/action.type";
import Loader from "../../Components/Loader/Loader";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
function ProductDetail() {
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [{ basket }, dispatch] = useContext(DataContext);
  useEffect(() => {
    if (!id) return;
    setLoading(true);

    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetching: " + err);
        setLoading(false);
      });
  }, [id]);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product,
    });
  };

  return (
    <>
      {" "}
      <LayOut>
        {isLoading || !product ? (
          <Loader />
        ) : (
          <section>
            <h1 style={{ padding: 30 }}>Product Details</h1>

            <div className={classes.details__container} style={{ padding: 30 }}>
              <div className={classes.image}>
                <img src={product.image} alt={product.title} width={200} />
              </div>
              <div className={classes.description}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>
                  <CurrencyFormat amount={product.price} />
                </h3>
                <button className={classes.button} onClick={addToCart}>
                  add to cart
                </button>
              </div>
            </div>
          </section>
        )}
      </LayOut>
    </>
  );
}

export default ProductDetail;
