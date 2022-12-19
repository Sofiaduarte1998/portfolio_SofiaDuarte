import React from "react";
import Navbar from "./components/nav/NavBar";
import Home from "./components/Home/hero";
import About from "./components/About/about";
import Skills from "./components/Skill/skill";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/cont";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
