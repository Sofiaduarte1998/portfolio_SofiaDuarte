import React from "react";
import P from "./rosto.jpg";
import "./about.css";
// import img
//img falta
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container f_flex top">
          <div className="heading text-center">
            <h1>About</h1>
            <br />
            <p>
              My interest is in web development and UI/UX design.
              <br />I started creating a website for a village parish starting
              with HTML, CSS and Javascript and fast forward to today, I have
              had the privilege of working with several languages and developing
              creative projects. Recently I am a web development volunteer for a
              company linked to Ukrainian support.
            </p>
          </div>
          <div className="perfil_img">
            <img src={P} alt="P" className="img_perf" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
