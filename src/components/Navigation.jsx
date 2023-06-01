import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <Link to="/">
            {/* <img src={logo} alt="" className="" /> */}
          </Link>
        </div>

        <div className="container-menu-items">
          <form className="search-form">
            <input
              type="text"
              className="Search-input"
              placeholder="Buscar..."
              id=""
            />
            <button className="btn-search">Buscar</button>
          </form>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
