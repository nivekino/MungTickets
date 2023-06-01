import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./assets/Navigation.css";
import logo from "./assets/img/logo.png";
import logoEvent from "./assets/img/logo-eventos.png";
import logoCategory from "./assets/img/logo-categorias.png";
import logoProfile from "./assets/img/logo-user.png";

const Navigation = () => {
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <Link to="/">
            <img src={logo} alt="" className="" />
          </Link>
        </div>

        <div className="container-search">
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              id=""
            />
            <button className="btn-search">
              <i class="fa-regular fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="container-menu-items">
          <ul className="menu-items">
            <li className="menu-item">
              <Link to="/">
                <img src={logoEvent} alt="" className="img-menu" />
                <p className="txt-menu">Eventos</p>
              </Link>
            </li>
            <li className="menu-item">
              <div className="menu-item">
                <img src={logoCategory} alt="" className="img-menu" />
                <p className="txt-menu">Categorias</p>
              </div>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/categoria1">Categoria 1</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/categoria2">Categoria 2</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <div className="menu-item">
                <img src={logoProfile} alt="" className="img-menu" />
                <p className="txt-menu">User</p>
              </div>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/settings">Settings</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
