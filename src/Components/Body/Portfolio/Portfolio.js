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
      </Fade>
      {/* Contain section */}
      <Fade bottom>
        <div className="row container-portfolio">
          <div className="col s12 m6 l4">
            <img
              class="portfolio-col-3 z-depth-2 materialboxed"
              data-caption="
Choose a random scrum. Desktop"
              src={sorteoscrum1}
              alt="Scrum project page"
            ></img>
            <img
              class="materialboxed portfolio-col-3 z-depth-2"
              data-caption="Rolling Vet Veterinary Clinic Project. 
Mobile"
              src={clinica2}
              alt="Clinic project page"
            ></img>
          </div>
          <div className="col s12 m6 l4">
            <img
              class="z-depth-2 materialboxed portfolio-col-3"
              data-caption="
Choose a random scrum. Mobile"
              src={sorteoscrum2}
              alt="Scrum project page"
            ></img>
            <img
              class="materialboxed z-depth-2 portfolio-col-3"
              data-caption="
Rolling Vet Veterinary Clinic Project. Desktop"
              src={clinica1}
              alt="Clinic project page"
            ></img>
          </div>
          <div className="col s12 m12 l4">
            <div className="row">
              <div className="col m12 l12">
                <img
                  class="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Lager Beer project (Stella Artois). Desktop"
                  src={stella1}
                  alt="Beer project page"
                ></img>
              </div>
              <div className="col m6 l12 d-md-none">
                <img
                  class="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Lager Beer project (Stella Artois). 
Mobile"
                  src={stella2}
                  alt="Beer project page"
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
