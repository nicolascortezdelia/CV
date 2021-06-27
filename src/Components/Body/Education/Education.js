import React from "react";
import "../Education/education.css";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <section className="education row scrollspy" id="education">
      <Fade bottom>
        {/* Tittles of sections */}
        <div className="valign-wrapper">
          <div className="col s2 align-icons">
            <i className="fas fa-2x fa-book sections-icons"></i>
          </div>
          <div className="col s10">
            <h5 className="tittle-weight">
              <b>EDUCATION</b>
            </h5>
            <hr />
          </div>
        </div>
        {/* Content education */}
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2019 - 2020</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Rolling Code School</h6>
            <p>Completed full stack web developer course.</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2006 - 2011</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>High School</h6>
            <p>
              Training institution: Liceo Remedio de Escalada de San Martin.
              <br />
              Degree: Polymodal Education (Orientation in Natural Sciences).
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>1998 - 2005</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Primary School</h6>
            <p>School: Dr. Raúl Colombres.</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Education;
