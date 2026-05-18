import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./orders.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Products/ProductCards";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
function Orders() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [Order, setOrder] = useState([]);
  useEffect(() => {
    if (!user) return;
    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrder(
        snapshot?.docs?.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <LayOut>
      <section className={`${classes.container} ordersPage`}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          <hr />
          {Order?.length == 0 && (
            <p className={classes.emptyOrders}>
              You haven’t placed any orders yet.
            </p>
          )}
          <div>
            {Order?.map((eachOrder, i) => {
              return (
                <div className={classes.product_container} key={i}>
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard
                        paymentStyle={true}
                        hideButton={true}
                        product={order}
                        key={order?.id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
