import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import "./Accomodation.scss";

const Accomodation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((item) => item.id === id); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);

  useEffect(() => {
    if (!logement) {
      console.error("Page data not found for ID:", id);
      navigate("/logement/error");
    }
  }, [id, logement, navigate]); 

  if (!logement) {
    return null;
  }

  return (    
      <div className="main-container">
          <Carousel pictures={logement.pictures} />
          <div className="information-section">
            <div className="left-information-section">
                <h1 className="logement__title">{logement.title}</h1>
                <p className="logement__location">{logement.location}</p>
                <Tags tags={logement.tags} />
            </div>
            <div className="right-information-section">
              <Host host={logement.host} />
              <Rating rating={logement.rating}/>
            </div>
          </div>
          <div className="collapse-section">
          <Collapse title='Description' content={logement.description} />
          <Collapse title='Equipements' content={logement.equipments} />
          </div>
    </div>
  );
};

export default Accomodation;
