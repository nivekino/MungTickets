import React from "react";
import axios from "axios";
import "./assets/home.css";

export const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <h1 className="txt-banner">¡Reserva tu aventura con nosotros!</h1>
        </div>
      </div>
      <div className="container">
        <h1 className="title-page">Eventos próximos...</h1>
        <button className="btn-load-more">Cargar más eventos</button>
      </div>
      <div>footer for the moment</div>
    </>
  );
};
