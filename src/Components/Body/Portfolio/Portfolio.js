import React from "react";
import "../Portfolio/portfolio.css";
import clinica1 from "../../../img/portfolio/clinica1.png";
import clinica2 from "../../../img/portfolio/clinica2.png";
import stella1 from "../../../img/portfolio/stella1.png";
import stella2 from "../../../img/portfolio/stella2.png";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <Fade bottom>
      <section className="portfolio scrollspy" id="portfolio">
        {/* Tittles of sections */}
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
        <div className="row container-portfolio">
          <div className="col s12 m6">
            <img
              class="materialboxed content-portfolio z-depth-3"
              data-caption="
Rolling Vet Veterinary Clinic Project"
              src={clinica1}
              alt="Veterinary Clinic page"
            ></img>
          </div>
          <div className="col s12 m6">
            <img
              class="materialboxed content-portfolio z-depth-3"
              data-caption="
Lager Beer project (Stella Artois)"
              src={stella1}
              alt="Lager Beer page"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <img
              class="materialboxed content-portfolio z-depth-3"
              data-caption="
Rolling Vet Veterinary Clinic Project, 
mobile version"
              src={stella2}
              alt="Veterinary Clinic page"
            ></img>
          </div>
          <div className="col s12 m6">
            <img
              class="content-portfolio z-depth-3 materialboxed"
              data-caption="
Lager Beer project (Stella Artois), mobile version"
              src={clinica2}
              alt="Lager Beer page"
            ></img>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Portfolio;
