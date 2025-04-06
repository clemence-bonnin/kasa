import React from "react";
import "./About.scss";
import aboutData from '/Users/admin/Documents/Openclassrooms/my-kasa-app/src/data/aboutData.json';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import bannerAbout from '/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/banner-about.webp'
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";


const About = () => {
    return     (
    <div>
        <Header />
        <Banner image={bannerAbout} />     
            {aboutData.map((item) => (
                <Collapse
                    key={item.id}
                    title={item.title}
                    content={item.description}
                />               
            ))}      
        <Footer />
    </div>
    );
};
  
export default About;
