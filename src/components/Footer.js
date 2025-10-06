import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <h3 className="footer__title">Efira Tech Capital</h3>
          <p className="footer__tagline">Innovación y capital tecnológico para el futuro.</p>
        </div>

        <div className="footer__links">
          <a href="#home" className="footer__link">Home</a>
          <a href="#about" className="footer__link">Sobre Nosotros</a>
          <a href="#contact" className="footer__link">Contacto</a>
        </div>

        <div className="footer__contact">
          <span className="footer__label">Servicio al cliente</span>
          <a href="mailto:soporte@efiratechcapital.com" className="footer__email">
            soporte@efiratechcapital.com
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Efira Tech Capital</span>
        <span className="footer__dot">•</span>
        <a href="#privacy" className="footer__smalllink">Privacidad</a>
        <span className="footer__dot">•</span>
        <a href="#terms" className="footer__smalllink">Términos</a>
      </div>
    </footer>
  );
};

export default Footer;
