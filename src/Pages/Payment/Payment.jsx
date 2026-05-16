import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCards from "../../Components/Products/ProductCards";
import axios from "axios";
import classes from "./payment.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
function Payment() {
  const [{ basket, user }] = useContext(DataContext);
  const [cardError, setcardError] = useState(null);
  const totalitem = basket?.reduce((amount, item) => {
    return amount + item.quantity;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);
  const handleChange = (e) => {
    e?.error?.message ? setcardError(e?.error?.message) : setcardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
    } catch {}
  };
  return (
    <LayOut>
      <div className={classes.title}>CheckOut {totalitem} items</div>
      <hr />
      <section className={classes.all__father}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div className={classes.userInfo}>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div className={classes.productitems}>
            {basket?.map((item) => {
              return (
                <ProductCards
                  product={item}
                  key={item.id}
                  hideButton={true}
                  flex={false}
                />
              );
            })}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.form_container}>
            <div>
              {cardError && <small>{cardError}</small>}
              <form onSubmit={handlePayment}>
                <CardElement onChange={handleChange} />
              </form>
              <div className={classes.total}>
                <div>
                  <span>Total Order | {<CurrencyFormat amount={total} />}</span>
                </div>
                <button>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
