import React from "react";
import aboutData from "../../data/aboutData.json";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/banner-about.webp";
import Collapse from "../../components/Collapse/Collapse";


const About = () => {
    return     (
        <div className="page-about">
            <Banner image={bannerAbout} title={""} />     
                {aboutData.map((collapse) => (
                    <Collapse
                        key={collapse.id}
                        title={collapse.title}
                        content={collapse.description}
                    />               
                ))}
        </div>   
    );
};
  
export default About;
