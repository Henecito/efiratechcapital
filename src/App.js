import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Meeting from "./sections/MeetingSection";
import Footer from "./components/Footer";
import About from "./sections/AboutSection";

function App() {
  return (
    <Router>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Meeting />} />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default App;
