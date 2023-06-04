import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { HomePage } from "../pages/homepage/HomePage";
import PagoEvento from "../pages/pagoEvento/PagoEvento";
import ConfirmacionPage from "../pages/confirmacionPage/ConfirmacionPage";
import DetalleEvento from "../pages/detalleEvento/DetalleEvento";
import EventosUser from "../pages/eventosUser/EventosUser";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pago-evento" element={<PagoEvento />} />
          <Route path="pago-confirmado" element={<ConfirmacionPage />} />
          <Route path="detalle-evento" element={<DetalleEvento />} />
          <Route path="eventos-user" element={<EventosUser />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
