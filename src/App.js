import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Meeting from "./sections/MeetingSection";
import Footer from "./components/Footer";
import About from "./sections/AboutSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Meeting />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
