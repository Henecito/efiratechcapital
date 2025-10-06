import React from "react";
import "../styles/Meeting.css";

const Meeting = () => (
  <section className="meeting" id="contact">
    <div className="meeting__bg" aria-hidden="true"></div>
    <div className="meeting__container">
      <div className="meeting__content">
        <h2 className="meeting__headline">Agenda una reunión con nuestro equipo</h2>
        <p className="meeting__lead">
          Conversemos sobre las necesidades de tu empresa y cómo podemos ayudarte a
          desarrollar una solución tecnológica eficiente, moderna y escalable.
        </p>
        <form className="meeting__form">
          <div className="form__group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
          </div>
          <div className="form__group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@empresa.com" required />
          </div>
          <div className="form__group">
            <label htmlFor="company">Empresa</label>
            <input type="text" id="company" name="company" placeholder="Nombre de tu empresa" />
          </div>
          <div className="form__group">
            <label htmlFor="message">Cuéntanos brevemente tu proyecto</label>
            <textarea id="message" name="message" rows="4" placeholder="App móvil, plataforma web, integración, etc." />
          </div>
          <button type="submit" className="btn btn--primary">
            Agendar reunión
          </button>
        </form>
      </div>
      <aside className="meeting__info">
        <h3>¿Por qué agendar con nosotros?</h3>
        <ul>
          <li>Recibe una propuesta técnica personalizada</li>
          <li>Definimos juntos los tiempos y alcances del proyecto</li>
          <li>Sin compromiso: la primera reunión es gratuita</li>
        </ul>
        <p className="meeting__note">
          También puedes escribirnos directamente a{" "}
          <a href="mailto:soporte@efiratechcapital.com">soporte@efiratechcapital.com</a>
        </p>
      </aside>
    </div>
  </section>
);

export default Meeting;
