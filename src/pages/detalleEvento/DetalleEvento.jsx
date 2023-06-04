import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Calendar from "./assets/img/calendar.png";
import Duration from "./assets/img/duration.png";
import Location from "./assets/img/location.png";
import Event from "./assets/img/event.png";
import Hour from "./assets/img/hour.png";
import ImageDetalle from "./assets/img/img-detalle.png";
import Stadium from "./assets/img/stadium.png";
import "./assets/detalleEvento.css";

const DetalleEvento = () => {
  return (
    <>
      <div className="continer-detalle">
        <div className="detalle-info">
          <div className="contaier-info">
            <img src={ImageDetalle} alt="" className="img-detalle" />
            <div className="info-detalle">
              <h1 className="title-detalle">Juan Luis Guerra</h1>
              <div className="info-container">
                <div className="info-1">
                  <div className="container-detalle-info">
                    <img src={Calendar} alt="" />
                    <p className="txt-detalle">24-05-23</p>
                  </div>
                  <div className="container-detalle-info">
                    <img src={Location} alt="" />
                    <p className="txt-detalle">Salamanca</p>
                  </div>
                  <div className="container-detalle-info">
                    <img src={Hour} alt="" />
                    <p className="txt-detalle">18:30</p>
                  </div>
                </div>
                <div className="info-2">
                  <div className="container-detalle-info">
                    <img src={Duration} alt="" />
                    <p className="txt-detalle">1:30 horas de duración</p>
                  </div>
                  <div className="container-detalle-info">
                    <img src={Event} alt="" />
                    <p className="txt-detalle">Toque musical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="line-divider" />
          <div className="localidades-container-2">
            <div className="price-container">
              <h2 className="title-localidades">Localidades:</h2>
              <div className="price-info">
                <p className="txt-localidades">Platinum</p>
                <p className="txt-localidades">$150</p>
              </div>
              <div className="price-info">
                <p className="txt-localidades">VIP </p>
                <p className="txt-localidades">$100</p>
              </div>
              <div className="price-info">
                <p className="txt-localidades">Gold </p>
                <p className="txt-localidades">$50</p>
              </div>
              <div className="price-info">
                <p className="txt-localidades">General</p>
                <p className="txt-localidades">$30</p>
              </div>
            </div>
            <div className="localidades-container-3">
              <img src={Stadium} alt="" className="img-locations"/>
            </div>
            <div className="container-shop">
              <Link to="/pago-evento">
                <button className="btn-pay">Comprar tickets</button>
              </Link>
            </div>
          </div>
          <hr className="line-divider" />
          <div className="container-patrocinio">
            <h3 className="title-patrocinadores">Patrocinadores:</h3>
            <p className="txt-patrocinadores">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetalleEvento;
