import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logoKasa from "../../assets/logo-kasa.svg";

const Header = () => {
  return (
    <div className="nav__bar">
      <img src={logoKasa} alt="Logo Kasa" />
      <ul>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          <li>Accueil</li>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;