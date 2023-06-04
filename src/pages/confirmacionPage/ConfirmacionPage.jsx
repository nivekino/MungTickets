import React from "react";
import "./assets/css/confirmationPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// imagenes
import logo from "./assets/img/logo.png";
import card from "./assets/img/card-plus.png";

const ConfirmacionPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="contenedor">
          <h1 className="title">Resumen de tu compra</h1>
          <h2 className="subtitle">
            ¡Gracias por poner tu confianza en nosotros!
          </h2>
          <br />
          <div className="card-custom">
            <div className="card-body-custom">
              <table className="w-100">
                <tr>
                  <td colSpan={3} className="center-img logo">
                    <img src={logo} alt="logo" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="pb-2 separate-b">
                    <h3 className="name">JUAN LUIS GUERRA</h3>
                    <h3 className="name">EL SALVADOR - SALAMANCA</h3>
                  </td>
                </tr>
                <tr className="separate-b">
                  <td className="bold">
                    <h3 className="name text-center bold">1</h3>
                  </td>
                  <td>
                    <h3 className="name text-center">VIP</h3>
                  </td>
                  <td>
                    <h3 className="name">$100</h3>
                  </td>
                </tr>
                <tr className="separate-b" style={{ height: "100px" }}>
                  <td colSpan={2} className="text-center">
                    <h3 className="name semibold">Total</h3>
                  </td>
                  <td>
                    <h3 className="name">$100</h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="pb-2">
                    <h3 className="name">Cobrado a la tarjeta</h3>
                    <h3 className="name">
                      <img className="card-plus" src={card} alt="" />
                      ************8194
                    </h3>
                  </td>
                  <td>
                    <h3 className="name">$100</h3>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <Link to="/" style={{ marginLeft: "auto" }}>
            <button className="btn-back">Regresar</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmacionPage;
