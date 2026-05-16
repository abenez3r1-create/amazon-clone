import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Results from "./Pages/Results/Results";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51TWZ9mRwYAlHPdzvAzcGvhMgqJbcaEwBeeClSSe5S7wJ8MS54fDDEzkISKz0E1ywAslQLWSMN8xxo6CVvx1aDqKi00QImHQzHb",
);
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
