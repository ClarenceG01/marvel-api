import React, { useState, useEffect } from "react";
import image1 from "../images/hero3.jpg";
import image2 from "../images/hero1.jpg";

export const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([image1, image2]);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 3 ? selectedImage + 1 : 0
      );
    }, 4000);
  }, []);
  return (
    <div className="slider">
      <img src={allImages[selectedImage]} /> <br />
    </div>
  );
};
