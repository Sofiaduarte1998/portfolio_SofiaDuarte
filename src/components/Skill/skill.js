import React from "react";
import "./skill.css";
import Html from "./assents/HTML.png";
import CSS from "./assents/css.png";
import JS from "./assents/1.png";
import R from "./assents/React.png";
import Bootstrap from "./assents/14.png";
import N from "./assents/Node.png";
import G from "./assents/Git.png";
import GH from "./assents/gh.png";
import Figma from "./assents/Figma.png";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="container  top">
          <div className="heading text-center">
            <h1>Skills</h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="details">
                  <div className="size html_page">
                    <img
                      src={Html}
                      alt="HTML"
                      className="icon icon-card img-s"
                    />
                  </div>
                  <div className="size html_page">
                    <img src={CSS} alt="CSS" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img src={JS} alt="JS" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img src={R} alt="R" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img
                      src={Bootstrap}
                      alt="Bootstrap"
                      className="icon icon-card img-s"
                    />
                  </div>
                  <div className="size html_page">
                    <img src={N} alt="N" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img src={G} alt="G" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img src={GH} alt="GH" className="icon icon-card img-s" />
                  </div>
                  <div className="size html_page">
                    <img
                      src={Figma}
                      alt="Figma"
                      className="icon icon-card img-s"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

/* 


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills




import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Project from "./projects";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container port_flex top">
          <div className="heading text-center">
            <h1>Portfolio</h1>
          </div>
          <div className="content grid">
            {Project.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  title={value.title}
                  /* href
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;









*/
