import React from "react";
import './Home.scss'
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import bannerHome from '/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/banner-home.webp';
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
    <div className="page-home">
    <Header />
    <Banner 
    image={bannerHome} 
    title="Chez vous, partout et ailleurs" 
    />
    <Footer />
    </div>
    )
  }

export default Home;

