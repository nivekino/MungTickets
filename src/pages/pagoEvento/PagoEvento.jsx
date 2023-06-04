import React, { useState } from "react";
import "./assets/style.css";
import { Link } from "react-router-dom";

const PagoEvento = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="container2">
        <div className="section1">
          <h1 className="asd">Juan Luis Guerra</h1>
          <div className="info">
            <div className="item">
              <i
                className="fa-solid fa-calendar-days icon"
                style={{ marginRight: "12px" }}
              ></i>
              <p className="txt-item">24-05-23</p>
            </div>
            <div className="item">
              <i
                class="fa-regular fa-location-dot icon"
                style={{ marginRight: "12px" }}
              ></i>
              <p className="txt-item">Salamanca</p>
            </div>
            <div className="item">
              <i
                class="fa-regular fa-timer icon"
                style={{ marginRight: "12px" }}
              ></i>
              <p className="txt-item">1:30 horas de duración</p>
            </div>
            <div className="item">
              <i
                class="fa-regular fa-timer icon"
                style={{ marginRight: "12px" }}
              ></i>
              <p className="txt-item">18:30</p>
            </div>
          </div>
          <hr className="linea-horizontal" />
        </div>
        <div className="contenito-titulo-section2">
          <h3 className="txt-title2">Ingresa los siguientes datos</h3>
          <div className="vacio"></div>
        </div>

        <div className="section2">
          <div className="colum1">
            <h3 className="txt-colum1">Seleccione la localidad</h3>

            <div className="container-options">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "option1"}
                  onChange={() => handleOptionChange("option1")}
                />
                <p className="txt-checkbox">Platinum</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "option2"}
                  onChange={() => handleOptionChange("option2")}
                />
                <p className="txt-checkbox">VIP</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "option3"}
                  onChange={() => handleOptionChange("option3")}
                />
                <p className="txt-checkbox">Gold</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === "option4"}
                  onChange={() => handleOptionChange("option4")}
                />
                <p className="txt-checkbox">General</p>
              </label>
            </div>
            <p className="txt-colum1">Seleccione la cantidad de tickets</p>
            <select>
              <option value="">Cantidad de tickets</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <div className="line-hor"></div>
            <h3 className="txt-title">Total a cancelar</h3>
          </div>

          <div className="colum2">
            <h3 className="title-inf-tarjeta">Informacion de la tarjeta</h3>

            <div className="item-formulario">
              <span>Nombre de la tarjeta:</span>
              <input type="text" className="input-custom" />
            </div>
            <div className="item-formulario">
              <span>No. de Tarjeta:</span>
              <input type="text" className="input-custom" />
            </div>
            <div className="item-formulario">
              <span>Fecha de expiración:</span>
              <input type="text" className="input-custom" />
            </div>
            <div className="item-formulario">
              <span>No. de verificación:</span>
              <input type="text" className="input-custom" />
            </div>

            <div className="butons-options">
              <button className="button-cancel"> Cancelar</button>

              <Link to="/pago-confirmado">
                <button className="button-realizar">Realizar compra</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagoEvento;
