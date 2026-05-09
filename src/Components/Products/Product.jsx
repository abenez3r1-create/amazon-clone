import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";
import classes from "./product.module.css";
function Product() {
  const [productState, setproductState] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproductState(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("fetching error: " + err);
      });
  }, []);
  return (
    <div className={classes.product__container}>
      {productState?.map((singleProduct) => {
        return <ProductCards product={singleProduct} key={singleProduct.id} />;
      })}
    </div>
  );
}

export default Product;
