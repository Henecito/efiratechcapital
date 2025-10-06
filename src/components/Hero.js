import React from "react";
import "../styles/Hero.css";

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__pattern" aria-hidden="true" />
    <div className="hero__container">
      <div className="hero__copy">
        <h1 className="hero__headline">
          Desarrollamos apps y plataformas que impulsan empresas reales
        </h1>
        <p className="hero__lead">
          Creamos soluciones tecnológicas a medida: aplicaciones móviles, plataformas web y sistemas integrados que optimizan procesos y mejoran la experiencia de tus usuarios.
        </p>

        <ul className="hero__bullets">
          <li>Desarrollo móvil para iOS y Android</li>
          <li>Plataformas web modernas con React, Node.js, Supabase y Firebase</li>
          <li>Integraciones, APIs y automatizaciones empresariales</li>
        </ul>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Agenda una reunión</a>
          <a href="#about" className="btn btn--ghost">Ver proyectos</a>
        </div>
      </div>

      <aside className="hero__card">
        <div className="hero__stats">
          <div className="stat">
            <span className="stat__num">+100%</span>
            <span className="stat__label">enfoque en resultados</span>
          </div>
          <div className="stat">
            <span className="stat__num">4–10 sem</span>
            <span className="stat__label">desarrollo de MVP funcional</span>
          </div>
          <div className="stat">
            <span className="stat__num">Escalable</span>
            <span className="stat__label">cloud, seguridad y soporte continuo</span>
          </div>
        </div>

        <div className="hero__services">
          <span className="chip">Apps móviles</span>
          <span className="chip">Plataformas web</span>
          <span className="chip">Integraciones empresariales</span>
          <span className="chip">Automatización</span>
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
