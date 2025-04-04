import React from "react";
import "./Footer.scss";
import logoKasaBlanc from "../../assets/logo-kasa-blanc.svg";


const Footer = () => {
  return (
    <div className="footer">
      <img src={logoKasaBlanc} alt="Logo Kasa blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
