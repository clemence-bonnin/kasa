import React from "react";
import './Host.scss';

const Host = ({ host }) => {
  return (
    <div className="host__container">
      <div className="host__item">
        <p className="host__name">{host.name}</p>
        <img src={host.picture} alt={host.name} className="host__picture" />
      </div>
    </div>
  );
};

export default Host;
