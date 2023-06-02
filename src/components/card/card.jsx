import React, { useState } from "react";
import card from "./assets/img/card.png";
import "./assets/card.css";

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
            <p>Información adicional</p>
            <p>Más detalles aquí</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;