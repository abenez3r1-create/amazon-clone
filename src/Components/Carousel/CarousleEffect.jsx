import React from "react";
import classes from "./carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import img from "./img/card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarousleEffect() {
  // return (
  //   <>
  //     <div>
  //       <Carousel
  //         autoPlay={true}
  //         showIndicators={false}
  //         showThumbs={false}
  //         infiniteLoop={true}
  //       >
  //         {img.map((imageListLink) => {
  //           return <img src={imageListLink} />;
  //         })}
  //       </Carousel>
  //       <div className={classes.hero_effect}></div>
  //     </div>
  //   </>
  // );
  return (
    <div className={classes.carousel__container}>
      <Carousel
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {img.map((imageListLink) => {
          return <img src={imageListLink} />;
        })}
      </Carousel>

      <div className={classes.hero_effect}></div>
    </div>
  );
}

export default CarousleEffect;
