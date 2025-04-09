import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logoKasa from "../../assets/logo-kasa.svg";

const Header = () => {
  return (
    <div className="header__container">
      <NavLink to="/">
      <img src={logoKasa} alt="Logo Kasa" className="logo-kasa" />
      </NavLink>
      <nav className="header__navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        À Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;