import React, { useState } from "react";
import { Link } from "react-router-dom";
import card from "./assets/img/card.png";
import "./assets/card.css";
import location from "./assets/img/location.png";
import calendar from "./assets/img/calendar.png";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={card} alt="" className="bg-card" />
        {isHovered && (
          <div className="card-info">
            <h3 className="title-card">Juan Luis Guerra</h3>
            <div className="container-info-card">
              <img src={calendar} alt="" className="ico-card" />
              <p className="txt-card">24-05-23</p>
            </div>
            <div className="container-info-card">
              <img src={location} alt="" className="ico-card" />
              <p className="txt-card">24-05-23</p>
            </div>
            <Link to="/detalleEvento" className="btn-detalle">
              Ver detalles <i className="fa-light fa-arrow-right-long"></i>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
