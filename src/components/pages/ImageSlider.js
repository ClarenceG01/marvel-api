import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/hero1.jpg";
import image2 from "../images/hero3.jpg";

export const ImageSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      transitionTime={0.1}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      <div className="slider">
        <img src={image1} />
      </div>
      <div className="slider">
        <img src={image2} />
      </div>
    </Carousel>
  );
};
