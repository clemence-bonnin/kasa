import React from "react";
import { useState } from "react";
import chevron from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/chevron.svg";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const activeCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="collapse">
      <div className="collapse__top">
        <div className="collapse__title">{title}</div>
        <img
          src={chevron}
          alt="Icône chevron"
          className={`collapse__chevron ${isOpen ? "rotated" : ""}`}
          onClick={activeCollapse}
        />
      </div>

      {isOpen && (
        <div className="collapse__content">
          {content}
        </div>
      )}
    </li>
  );
};

export default Collapse;
