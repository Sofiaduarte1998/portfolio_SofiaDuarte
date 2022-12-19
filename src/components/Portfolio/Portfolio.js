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

                  /* href*/
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
