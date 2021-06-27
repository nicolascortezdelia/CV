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
            <h6>2020 - Present</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">RollingCode School.</div>
              Assistan in programming classes
            </h6>
            <p>
              At the time work as an assistant in programming classes (Full
              Stack MERN) and I teach tools as Javascript, HTML, CSS,
              Bootrstrap, ReactJS, MongoDB, Mongoose, Express, NodeJS, Agile
              Methodologies and Git. Also I analize the level of the students so
              I have a best control of them.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2020 - 2021</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job">
                RollingCode School.
              </div>
              Software development.
            </h6>
            <p>
              For 7 months I had the pleasure of working as a full stack developer for some web applications for clients of this company, applying technologies such as HTML, CSS, Javascript, ReactJS, AngularJS, Cordova Cli, MongoDB, NodeJS, Express
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
