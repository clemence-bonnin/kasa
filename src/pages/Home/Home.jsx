import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerHome from '/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/banner-home.webp';
import Card from "../../components/Card/Card";
import logements from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/data/logements.json";

const Home = () => {
    return (
    <div className=".main-container">
      <div className="page-home">
      <Banner 
      image={bannerHome} 
      title="Chez vous, partout et ailleurs" 
      />
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            image={logement.cover}
          />               
        ))} 
      </div>
      </div>
    </div>
    )
  }

export default Home;




