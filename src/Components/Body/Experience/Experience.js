import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience row" id="experience">
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
          <h6>2017 - 2020</h6>
        </div>
        <div className="col s12 m8 xl9 content-border-left">
          <div className="circles"></div>
          <h6>
            Teleperformance
            <br />
            <b>Agente Telefonico</b>
          </h6>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="row content-sections">
        <div className="col s12 m4 xl3 center-align bg-years">
          <h6>2017 - 2020</h6>
        </div>
        <div className="col s12 m8 xl9 content-border-left">
          <div className="circles"></div>
          <h6>
            Teleperformance
            <br />
            <b>Agente Telefonico</b>
          </h6>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="row content-sections">
        <div className="col s12 m4 xl3 center-align bg-years">
          <h6>2017 - 2020</h6>
        </div>
        <div className="col s12 m8 xl9 content-border-left">
          <div className="circles"></div>
          <h6>
            Teleperformance
            <br />
            <b>Agente Telefonico</b>
          </h6>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
