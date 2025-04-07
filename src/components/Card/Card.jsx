import React from "react";
import "./Card.scss";


const Card = ({ title, image }) => {    

  return (
    <div className="card">
        <img className="card__image" src={image} alt={title} />
        <div className="card__overlay"></div>
        <p className="card__title">{title}</p>
    </div>
  );
}

export default Card;

  