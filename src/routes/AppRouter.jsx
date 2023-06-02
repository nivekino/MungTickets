import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { HomePage } from "../pages/homepage/HomePage";
import PagoEvento from "../pages/pagoEvento/PagoEvento";
import ConfirmarCompra from "../pages/confirmarCompra/confirmarCompra";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pagoEvento" element={<PagoEvento />} />
          <Route path="confirmarCompra" element={<ConfirmarCompra />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
