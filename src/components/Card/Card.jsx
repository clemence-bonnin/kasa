import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accomodation/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} className="card__image" />
      <p className="card__title">{title}</p>
    </div>
  );
};

export default Card;
