import React from "react";
import { useState } from "react";
import chevron from "../../assets/chevron.svg";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const activeCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__container">
      <div className="collapse__top">
        <div className="collapse__title">{title}</div>
        <img
          src={chevron}
          alt="Icône chevron"
          className={`collapse__chevron ${isOpen ? "rotated" : ""}`}
          onClick={activeCollapse}
        />
      </div>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;


