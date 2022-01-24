import React from "react";
import "../Portfolio/portfolio.css";
import riccos2 from "../../../img/portfolio/riccosheladeria2.png";
import Laboris from "../../../img/portfolio/quiensehatomadotodoelvinologin.png";
import Stepmed from "../../../img/portfolio/panaderiacocu.png";
import sorteoscrum1 from "../../../img/portfolio/riccosheladeriaadmin.png";
import sorteoscrum2 from "../../../img/portfolio/riccosheladeriamobile2.png";
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
              className="portfolio-col-3 z-depth-2 materialboxed"
              data-caption="
Choose a random scrum. Desktop"
              src={sorteoscrum1}
              alt="Scrum project page"
            ></img>
            <img
              className="materialboxed portfolio-col-3 z-depth-2"
              data-caption="Riccos Heladeria full screen project"
              src={riccos2}
              alt="Ice Cream Store project page"
            ></img>
          </div>
          <div className="col s12 m6 l4">
            <img
              className="z-depth-2 materialboxed portfolio-col-3"
              data-caption="
Choose a random scrum. Mobile"
              src={sorteoscrum2}
              alt="Scrum project page"
              width={75}
            ></img>

          </div>
          <div className="col s12 m12 l4">
            <div className="row">
              <div className="col m12 l12">
                <img
                  className="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Application for medical controls https://panel.stepmed.com.ar/login"
                  src={Stepmed}
                  alt="Beer project page"
                ></img>
              </div>
              <div className="col m6 l12 d-md-none">
                <img
                  className="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Administrative application for lawyers: https://testlaboris.netlify.app/"
                  src={Laboris}
                  alt="Beer project page"
                ></img>
              </div>
              <div className="col m6 l12 d-md-none">
                <img
                  className="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Administrative application for lawyers: https://testlaboris.netlify.app/"
                  src={Laboris}
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
