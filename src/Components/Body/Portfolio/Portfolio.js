import React from "react";
import "../Portfolio/portfolio.css";
import Gelatto1 from "../../../img/portfolio/riccosheladeria2.png";
import Wine from "../../../img/portfolio/quiensehatomadotodoelvinofullsize.png";
import Bakery from "../../../img/portfolio/panaderiacocu.png";
import Gelatto2 from "../../../img/portfolio/riccosheladeriaadmin.png";
import Gelatto3 from "../../../img/portfolio/riccosheladeriamobile2.png";
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
              Ice Cream parlor project page. Desktop"
              src={Gelatto2}
              alt="Ice Cream parlor project page"
            ></img>
            <img
              className="materialboxed portfolio-col-3 z-depth-2"
              data-caption="Riccos Heladeria full screen project https://riccosheladeria.netlify.app/index.html"
              src={Gelatto1}
              alt="Ice Cream parlor project page"
            ></img>
          </div>
          <div className="col s12 m6 l4">
            <img
              className="z-depth-2 materialboxed portfolio-col-3"
              data-caption="
              Ice cream parlor project page. Mobile"
              src={Gelatto3}
              alt="ice cream parlor project page"
              width={75}
            ></img>

          </div>
          <div className="col s12 m12 l4">
            <div className="row">
              <div className="col m12 l12">
                <img
                  className="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Bakery project page"
                  src={Bakery}
                  alt="Bakery project page"
                ></img>
              </div>
              <div className="col m6 l12 d-md-none">
                <img
                  className="materialboxed portfolio-col-3 z-depth-2"
                  data-caption="
Blog about wines: https://quiensehatomadotodoelvino.netlify.app/index.html"
                  src={Wine}
                  alt="Wine project page"
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
