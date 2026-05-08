import React, { useContext, useReducer } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./cart.module.css";
import ProductCards from "../../Components/Products/ProductCards";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // return (
  //   <LayOut>
  //     <section>
  //       <div>
  //         <h2>Hello</h2>
  //         <h3>Your Shopping Basket</h3>
  //         <hr />
  //         {basket?.length == 0 ? (
  //           <p>No items in your Cart</p>
  //         ) : (
  //           basket?.map((item) => {
  //             return (
  //               <div className={classes.details__container}>
  //                 <ProductCards
  //                   key={item.id}
  //                   product={item}
  //                   isCart={true}
  //                   hideButton={true}
  //                   renderDesc={true}
  //                 />
  //               </div>
  //             );
  //           })
  //         )}
  //       </div>
  //       <div></div>
  //     </section>
  //   </LayOut>
  // );
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

            <button>Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
