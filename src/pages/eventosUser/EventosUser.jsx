import React, { useState } from "react";
import "./assets/eventosUser.css";
import logoBg from "./assets/img/big-ico.png";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import cardbg from "./assets/img/cardUser.png";
import codeQR from "./assets/img/codeQR.png";
import logoSend from "./assets/img/logoSend.png";

const EventosUser = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showModalContent, setShowModalContent] = useState(true);
  const [modalContent, setModalContent] = useState("main");

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleTransferClick = () => {
    setShowModalContent(false);
    setModalContent("transfer");
  };

  const handleQRClick = () => {
    setShowModalContent(false);
    setModalContent("qr");
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModalContent(true);
    setModalContent("main");
  };

  const handleCancelClick = () => {
    setModalContent("main");
  };

  const handleIngresarClick = () => {
    setShowModalContent(false);
    setModalContent("correoEnviado");
  };

  const handleTransferCode = () => {
    setShowModalContent(false);
    setModalContent("transferCode");
  };

  const handleTransferCodeConfirmed = () => {
    setShowModalContent(false);
    setModalContent("transferCodeConfirmed");
  };

  return (
    <>
      <h1 className="title-user-event">Mis eventos</h1>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Próximos
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Pasados
        </div>
      </div>
      <hr className="line-divider" />

      {activeTab === 1 && (
        <div className="tab-content">
          <div className="container-all-event-user">
            <div className="container-card-user">
              <div className="card-event-user" onClick={handleCardClick}>
                <img src={cardbg} alt="" className="img-card-user" />
              </div>
              <p className="ticket-count">1 ticket</p>
            </div>
          </div>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>

                {modalContent === "main" && (
                  <>
                    <h2 className="title-event-modal">Juan Luis Guerra</h2>
                    <div className="container-detail-modal">
                      <div className="img-modal-container">
                        <img src={cardbg} alt="" className="img-modal-info" />
                      </div>

                      <div className="container-info-modal">
                        <p className="">2023-07-08</p>
                        <p className="">SALAMANCA</p>
                        <p className="">17:30</p>
                        <p className="">1 ticket (VIP)</p>
                      </div>
                    </div>
                    <div className="cont-btn-modal">
                      <button
                        className="tns-ticket"
                        onClick={handleTransferClick}
                      >
                        Transferir ticket
                      </button>
                      <button className="gen-qr" onClick={handleQRClick}>
                        Generar QR
                      </button>
                    </div>
                  </>
                )}

                {modalContent === "transfer" && (
                  <>
                    <h2 className="title-event-modal-2">
                      ¿Desea transferir alguno de sus boletos?
                    </h2>
                    <p className="txt-2modal">
                      Ingrese la siguiente información:
                    </p>
                    <p className="user-txt-modal">
                      Ingrese el usuario destino:
                    </p>
                    <input type="text" className="input-modal-user" />
                    <div className="cont-btn-modal">
                      <button
                        className="ingresar-btn"
                        onClick={handleIngresarClick}
                      >
                        Confirmar
                      </button>
                      <button
                        className="return-btn-modal"
                        onClick={handleCancelClick}
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}

                {modalContent === "correoEnviado" && (
                  <>
                    <div className="mail-confirmed">
                      <img
                        src={logoSend}
                        alt=""
                        className="img-confirm-modal"
                      />
                      <h2 className="title-qr-modal-2">Correo enviado</h2>
                      <p className="txt-confirmed">
                        Se ha enviado un correo con la información del boleto
                      </p>
                      <button
                        className="confirmation-btn"
                        onClick={handleTransferCode}
                      >
                        Aceptar
                      </button>
                    </div>
                  </>
                )}

                {modalContent === "transferCode" && (
                  <>
                    <h2 className="title-event-modal-2">Ingresa el código</h2>
                    <p className="txt-2modal">
                      Ingrese código enviado al usuario destino
                    </p>
                    <p className="user-txt-modal">Código:</p>
                    <input type="text" className="input-modal-user" />
                    <div className="cont-btn-modal">
                      <button className="ingresar-btn" onClick={handleTransferCodeConfirmed}>Confirmar</button>
                      <button className="return-btn-modal" onClick={closeModal}>
                        Cancelar
                      </button>
                    </div>
                  </>
                )}

                {modalContent === "transferCodeConfirmed" && (
                  <>
                    <div className="mail-confirmed">
                      <img
                        src={logoSend}
                        alt=""
                        className="img-confirm-modal"
                      />
                      <h2 className="title-qr-modal-2">
                        Transferencia exitosa
                      </h2>
                      <p className="txt-confirmed">
                        Se han transferido 1 ticket al usuario USUARIO
                      </p>
                      <button className="confirmation-btn" onClick={closeModal}>
                        Regresar
                      </button>
                    </div>
                  </>
                )}

                {modalContent === "qr" && (
                  <>
                    <h2 className="title-qr-modal">Código QR</h2>
                    <img src={codeQR} alt="" className="img-qr" />
                    <p className="txt-qr-content">
                      <span className="txt-alternative">*Recordar:</span> Al
                      momento de ingresar al evento, debe presentar el código QR
                      de la entrada.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 2 && (
        <div className="tab-content-2">
          <div className="not-found-container">
            <img src={logoBg} alt="" className="img-bg-user" />
            <p className="txt-user-not">
              Al parecer no tienes ningún evento ¿Quieres ver los disponibles?{" "}
              <Link to="/" className="txt-link">
                aquí
              </Link>
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default EventosUser;
