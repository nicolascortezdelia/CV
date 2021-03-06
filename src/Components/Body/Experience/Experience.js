import React from "react";
import "./experience.css";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <section className="experience row scrollspy" id="experience">
      <Fade bottom>
        {/* Tittles of sections */}
        <div className="valign-wrapper">
          <div className="col s2 align-icons">
            <i className="fas fa-2x fa-briefcase sections-icons"></i>
          </div>
          <div className="col s10">
            <h5 className="tittle-weight">
              <b>EXPERIENCE</b>
            </h5>
            <hr />
          </div>
        </div>
        {/* Content experience */}
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2022 - Present</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job"> RollingCode School  </div>
              Tutor in Programming Classes
            </h6>
            <p>
              Since May 2022 I am working at Rolling Code School as Tutor or Teacher Assitant in Programming Classes teacning students
              Javascript, HTML, CSS, Bootrstrap, ReactJS, MongoDB,
              Mongoose, Express, NodeJS, Agile Methodologies and Git.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2018 - Present</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">Cortez D'Elia Law Firm</div>
              Attorney at Law
            </h6>
            <p>
              Since graduating from Law School at University of Tucuman I have
              been self-employed as Attorney, working my own Law Office. For
              some particular law cases I have also worked in partnership with
              colleagues.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
