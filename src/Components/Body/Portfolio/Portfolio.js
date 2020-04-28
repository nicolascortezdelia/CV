import React from "react";
import "../Portfolio/portfolio.css";
import clinica1 from "../../../img/portfolio/clinica1.png";
import clinica2 from "../../../img/portfolio/clinica2.png";
import stella1 from "../../../img/portfolio/stella1.png";
import stella2 from "../../../img/portfolio/stella2.png";
import sorteoscrum1 from "../../../img/portfolio/sorteoscrum1.png";
import sorteoscrum2 from "../../../img/portfolio/sorteoscrum2.png";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <section className="portfolio scrollspy" id="portfolio">
      <Fade bottom>
        <div className="valign-wrapper">
          <div className="col s2 m1 align-icons">
            <i className="fas fa-2x fa-folder sections-icons"></i>
          </div>
          <div className="col s10 m11">
            <h5 className="tittle-weight">
              <b>Portfolio</b>
            </h5>
            <hr />
          </div>
        </div>
      </Fade>
      {/* Tittles of sections */}
      {/* Contain section */}
      <Fade bottom>
        <div className="row container-portfolio">
          <div className="col s12 m6 l4">
            <img
              class="portfolio-col-3 z-depth-2 materialboxed"
              data-caption="
Page to draw random names and choose a scrum"
              src={sorteoscrum1}
              alt="Sorteo Scrum Page"
            ></img>
            <img
              class="materialboxed portfolio-col-3 z-depth-2"
              data-caption="Rolling Vet Veterinary Clinic Project, 
mobile version"
              src={clinica2}
              alt="Clinica Page"
            ></img>
          </div>
          <div className="col s12 m6 l4">
            <img
              class="z-depth-2 materialboxed portfolio-col-3"
              data-caption="
Page to draw random names and choose a scrum.mobile version"
              src={sorteoscrum2}
              alt="Sorteo Scrum Page"
            ></img>
            <img
              class="materialboxed z-depth-2 portfolio-col-3"
              data-caption="
Rolling Vet Veterinary Clinic Project"
              src={clinica1}
              alt="Clinica Page"
            ></img>
          </div>
          <div className="col s12 m12 l4">
            <div className="row">
              <div className="col m12 l12">
                <img
                  class="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Lager Beer project (Stella Artois)"
                  src={stella1}
                  alt="Lager Beer page"
                ></img>
              </div>
              <div className="col m6 l12 d-md-none">
                <img
                  class="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Lager Beer project (Stella Artois), 
mobile version"
                  src={stella2}
                  alt="Lager Beer page"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
