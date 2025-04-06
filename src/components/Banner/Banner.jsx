import React from "react";
import "./Banner.scss";

const Banner = ({ title, image }) => {

  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <img src={image} alt="Bannière" className="banner__image" />
    </div>
  );
};

export default Banner;


