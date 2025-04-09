import React from "react";
import { useState } from "react";
import arrowLeft from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/left-arrow.svg";
import arrowRight from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/right-arrow.svg";
import "./Carousel.scss";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const PreviousSlide = () => {
    const newIndex = index === 0 ? pictures.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const NextSlide = () => {
    const newIndex = index === pictures.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="carousel__container">
      <img
        src={arrowLeft}
        alt="Icône flèche précédente"
        className="carousel__arrow--left"
        onClick={PreviousSlide}
      />
      
      <img
        src={pictures[index]}
        alt="Image du logement"
        className="carousel__pictures"
      />

      <p className="carousel__navigation">
        {index + 1} / {pictures.length}
      </p>
      
      <img
        src={arrowRight}
        alt="Icône flèche suivante"
        className="carousel__arrow--right"
        onClick={NextSlide}
      />
    </div>
  );
}

export default Carousel;
