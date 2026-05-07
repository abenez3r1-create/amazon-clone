import React from "react";
import CarousleEffect from "../../Components/Carousel/CarousleEffect";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Products/Product";
import LayOut from "../../Components/LayOut/LayOut";

function Landing() {
  return (
    <LayOut>
      <CarousleEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
