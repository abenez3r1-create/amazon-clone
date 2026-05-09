import React, { useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import axios from "axios";
import productUrl from "../../API/Api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../../Components/Products/ProductCards";
import classes from "./results.module.css";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { categoryName } = useParams();
  const decoded = categoryName ? decodeURIComponent(categoryName) : "";

  useEffect(() => {
    if (!decoded) return;
    setLoading(true);
    axios
      .get(`${productUrl}/products/category/${decoded}`)
      .then((res) => {
        setResult(res.data);
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch: ", err);
        setLoading(false);
      });
  }, [decoded]);

  return (
    <>
      <LayOut>
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <h1 style={{ padding: 30, paddingBottom: 0 }}>Results</h1>
            <p style={{ padding: 30 }}>{`Category/${decoded}`}</p>

            <hr />

            <div className={classes.product__container}>
              {result.map((product) => (
                <ProductCards product={product} key={product.id} />
              ))}
            </div>
          </section>
        )}
      </LayOut>
    </>
  );
}
export default Results;
