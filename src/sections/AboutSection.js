import React from "react";
import "../styles/About.css";

// Imágenes temporales libres (puedes cambiarlas después)
const teamPhoto =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=480&q=80";
const officePhoto =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80";

const About = () => (
  <section className="about">
    <div className="about__effects" aria-hidden="true"></div>
    <div className="about__container">
      <article className="about__history-card">
        <header>
          <h2 className="about__title">Quiénes somos</h2>
        </header>
        <p>
          En 2025, Efira Tech Capital nació en torno a la oportunidad de crear
          una app innovadora para un cliente exigente. Somos dos socios: un
          programador apasionado por las buenas prácticas, la calidad y el
          aprendizaje continuo, y un socio comercial con visión estratégica,
          enfoque en resultados y convicción para abrir puertas y concretar
          alianzas.
        </p>
        <p>
          Así, pasamos de una simple propuesta a formalizar una empresa ágil,
          cercana y transparente, con el objetivo de entregar soluciones que
          realmente impactan a las personas y los negocios.
        </p>
        <img
          src={teamPhoto}
          className="about__photo"
          alt="Equipo Efira Tech Capital"
        />
      </article>

      <div className="about__pillars">
        <section className="about__pillar">
          <h3>Visión</h3>
          <p>
            Ser la aliada tecnológica que eleva el estándar del software a
            medida en la región, con calidad impecable y foco humano.
          </p>
        </section>
        <section className="about__pillar">
          <h3>Nuestro ADN</h3>
          <p>
            Transparencia, rigor técnico y acompañamiento real. Entregas en
            tiempo y relaciones de largo plazo por sobre el “proyecto por
            proyecto”.
          </p>
        </section>
        <section className="about__pillar">
          <h3>Cómo trabajamos</h3>
          <p>
            Descubrimiento claro, diseño y desarrollo iterativo, QA exigente y
            despliegue seguro. Sin humo: avances medibles y comunicación
            directa.
          </p>
        </section>
      </div>

      <aside className="about__ig-section">
        <h3>Conoce nuestro día a día</h3>
        <p>
          Sigue historias, proyectos y nuestro equipo en acción en Instagram:
        </p>
        <a
          href="https://instagram.com/efiratechcapital"
          target="_blank"
          rel="noopener noreferrer"
          className="about__ig-btn"
        >
          <span className="about__ig-icon">📸</span> @efiratechcapital
        </a>
      </aside>
    </div>
  </section>
);

export default About;
