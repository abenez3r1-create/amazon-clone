import React, { useContext, useReducer } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./cart.module.css";
import ProductCards from "../../Components/Products/ProductCards";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);
  return (
    <LayOut>
      <section className={classes.cart__container}>
        {/* LEFT SIDE */}
        <div className={classes.cart__left}>
          <h2>Hello {user?.email}</h2>

          <h3>Your Shopping Basket</h3>

          <hr />

          {basket?.length === 0 ? (
            <div className={classes.empty__cart}>
              <p>No items in your Cart</p>
            </div>
          ) : (
            basket?.map((item) => {
              return (
                <div key={item.id} className={classes.details__container}>
                  <ProductCards
                    product={item}
                    isCart={true}
                    hideButton={true}
                    renderDesc={true}
                    quantityCounter={true}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className={classes.cart__right}>
          <div className={classes.subtotal}>
            <h2>Subtotal ({basket?.length} items)</h2>
            <CurrencyFormat amount={total} />
            <Link to="/payment">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
