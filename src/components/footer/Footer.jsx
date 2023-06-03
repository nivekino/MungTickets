import React from "react";
import "./assets/footer.css";
import logo from "./assets/img/logo.png";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="separator"></div>
      <div className="footer-container">
        <div className="degradent-content">
          <div className="container-info-footer">
            <div className="container-logo-footer">
              <div className="logo-form">
                <img src={logo} alt="" className="" />
                <h1 className="txt-logo">mungTickets</h1>
              </div>
            </div>
            <div className="container-contactanos-footer">
              <h3 className="txt-contactanos">Contáctanos</h3>
              <h3 className="txt-mail underline">SmungTickets@gmail.com</h3>
            </div>

            <div className="container-descarga-footer">
              <h3 className="txt-contactanos">Descarga</h3>
              <h3 className="txt-mail">Android</h3>
            </div>
            <div className="container-social-footer">
              <h3 className="txt-contactanos">Síguenos en redes sociales</h3>
              <div className="cont-social">
                <Link to="/" className="icon-foo">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/" className="icon-foo">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/" className="icon-foo">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
