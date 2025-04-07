import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Accomodation from "./pages/Accomodation/Accomodation";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Footer />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
