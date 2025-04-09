import React from "react";
import { NavLink } from "react-router-dom";
import './ErrorPage.scss'

const ErrorPage = () => {
    return (
      <div>
        <main className="error__container">
          <h1 className="error__title">404</h1>
          <p className="error__txt">Oups! La page que vous demandez n'existe pas.</p>
          <NavLink to="/" className="error__redirection">
              Retourner sur la page d'accueil
          </NavLink>
        </main>
      </div>
  )
  };
  
export default ErrorPage;





  