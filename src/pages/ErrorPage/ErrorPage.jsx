import React from "react";
import { Link } from 'react-router-dom'
import './ErrorPage.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
    return (
      <div>
        <Header />
        <main className="error__container">
          <h1 className="error__title">404</h1>
          <p className="error__txt"> Oups! La page que demandez n'existe pas.</p>
          <Link to="/" className="error__redirection">
              Retourner sur la page d'accueil
          </Link>
        </main>
        <Footer />
      </div>
  )
  };
  
export default ErrorPage;





  