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
            <h6>2013 - 2014</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">Lecfer Tourismos.</div>
              Promoter and Coordinator.
            </h6>
            <p>
              Responsible for promoting the company and coordinating clients
              before and during the trip
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2015 - 2016</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">
                Hairdressing Adrián Serrano Estilistas contemporaneos.
              </div>
              Receptionist and manager.
            </h6>
            <p>
              As a receptionist my task was to receive customers in the best
              way. And as manager I had the task of controlling and managing
              the cashier, opening and closing the business, controlling the
              hours of the employees and also cleaning the place
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2017 - 2020</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">Teleperformance.</div>
              Telephone Agent.
            </h6>
            <p>
              I worked in customer service in the technical service area for
              Cablevision and Edenor companies.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
