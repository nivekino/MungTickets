import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./assets/Navigation.css";
import logo from "./assets/img/logo.png";
import logoEvent from "./assets/img/logo-eventos.png";
import logoCategory from "./assets/img/logo-categorias.png";
import logoProfile from "./assets/img/logo-user.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container">
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
                <ul className="submenu-2">
                  <li className="submenu-item">
                    <Link to="/">Toque musical</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Expo. de Arte</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Teatro</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Danza</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Literatura</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Debate</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Stand up comedy</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Otro</Link>
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
                    <Link to="/eventos-user">Mis eventos</Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/">Salir</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-menu-mobile">
          <div className="container-logo">
            <Link to="/">
              <img src={logo} alt="" className="" />
            </Link>
          </div>

          <div className={`mobile-menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className={`container-menu-options ${isMenuOpen ? "open" : ""}`}>
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
                  <ul className="submenu-2">
                    <li className="submenu-item">
                      <Link to="/">Toque musical</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Expo. de Arte</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Teatro</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Danza</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Literatura</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Debate</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Stand up comedy</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Otro</Link>
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
                      <Link to="/eventos-user">Mis eventos</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to="/">Salir</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
