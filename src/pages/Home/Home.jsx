import React from "react";
import './Home.scss'
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import bannerHome from '/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/banner-home.webp';
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import logements from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/data/logements.json";



const Home = () => {
    return (
    <div className="page-home">
    <Header />
    <Banner 
    image={bannerHome} 
    title="Chez vous, partout et ailleurs" 
    />
    <div className="gallery">
      {logements.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.cover}
        />               
      ))} 
    </div>
    <Footer />
    </div>
    )
  }

export default Home;

