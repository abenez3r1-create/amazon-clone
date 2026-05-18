import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCards from "../../Components/Products/ProductCards";
import axios, { create } from "axios";
import classes from "./payment.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Instance } from "../../API/Axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const [cardError, setcardError] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
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
      setPaymentLoading(true);
      const fixedTotal = Math.round(total * 100);
      const response = await Instance({
        method: "POST",
        url: `/payment/create?total=${fixedTotal}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(paymentIntent);

      await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
        basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      dispatch({
        type: Type.EMPTY_BASKET,
      });
      setPaymentLoading(false);
      navigate("/order", { state: { msg: "You have placed new order" } });
    } catch (err) {
      console.log("error: " + err);
      setPaymentLoading(false);
    }
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
            <div>chicago, IL</div>
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
                  flex={true}
                  paymentStyle={true}
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
                <div className={classes.total}>
                  <div className={classes.totalOrder}>
                    <span>
                      Total Order | {<CurrencyFormat amount={total} />}
                    </span>
                  </div>
                  <button type="submit">
                    {paymentLoading ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
