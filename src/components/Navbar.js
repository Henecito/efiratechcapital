import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css";
import logo from "../assets/generated-image.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Efira logo" className="navbar__logo" />
        <span className="navbar__brand-name">Efira Tech Capital</span>
      </Link>
      <div className={`navbar__links${open ? " navbar__links--open" : ""}`}>
        <Link className="navbar__link" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link className="navbar__link" to="/about" onClick={() => setOpen(false)}>
          Sobre Nosotros
        </Link>
        <Link className="navbar__link" to="/contact" onClick={() => setOpen(false)}>
          Contacto
        </Link>
      </div>
      <button
        className={`navbar__hamburger${open ? " navbar__hamburger--active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
