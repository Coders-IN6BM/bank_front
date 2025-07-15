import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pivotImage from "../../assets/img/pivotImage.jpg";
import "./navigation.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar custom-navbar fixed-top d-flex flex-row justify-content-between align-items-center px-2 px-md-4">
      <div className="d-flex align-items-center gap-2 gap-md-3">
        <img 
          src={pivotImage}
          alt="Logo de Piivot Bank"
          className="navbar-logo"
        />
        <span className="navbar-brand-text">
          <span className="navbar-brand-highlight">El Mejor Banco de Guatemala</span>
        </span>
      </div>

      <div className="d-flex align-items-center gap-2 gap-md-3">
        <span className="navbar-tagline d-none d-md-inline">
          Soluciones inteligentes para la industria bancaria
        </span>

        {/* Botón en pantallas grandes */}
        <button
          className="btn navbar-btn d-none d-sm-inline"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Cerrar sesión" : "Iniciar Sesión"}
        </button>

        {/* Botón menú hamburguesa solo en móviles */}
        <button
          className="btn navbar-hamburger d-inline d-sm-none"
          aria-label="Menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="position-absolute top-100 end-0 navbar-mobile-menu p-3 mt-2">
          <button
            className="btn navbar-mobile-btn"
            onClick={() => {
              setMenuOpen(false);
              isLoggedIn ? handleLogout() : handleLogin();
            }}
          >
            {isLoggedIn ? "Cerrar sesión" : "Iniciar Sesión"}
          </button>
        </div>
      )}
    </nav>
  );
};
