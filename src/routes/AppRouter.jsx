import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { HomePage } from "../pages/homepage/HomePage";
import PagoEvento from "../pages/pagoEvento/PagoEvento";
import DetalleEvento from "../pages/detalleEvento/DetalleEvento";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pagoEvento" element={<PagoEvento />} />
          <Route path="detalleEvento" element={<DetalleEvento />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
