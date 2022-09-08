import React from "react";
import "./hero.css";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Hello!</h3>
            <h2>
              I'am <span>Sofia Duarte</span>
            </h2>
            <h1>Web Developer</h1>
            <p>Front End Developer | Ui/Ux Designer</p>
            <button className="hero_btn">
              <a href="#contact">Contact me</a>
            </button>
          </div>
          <canvas id="move" width="200" height="200" class="canvas"></canvas>
        </div>
      </section>
    </>
  );
};

export default Home;
