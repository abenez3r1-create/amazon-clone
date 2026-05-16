import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./orders.module.css";
function Orders() {
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          <div></div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
