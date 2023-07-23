import React from 'react';
import './experience.css';
import Fade from 'react-reveal/Fade';

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
            <h6>November 2022 - <br /> Present</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job"> Sovos </div>
              Compliance Services Associate
            </h6>
            <p>
              Since November 2022 I have been working at Sovos as a Compliance Services
              Associate assisting mostly US-based clients to be compliant with
              their taxes, meeting all their regulatory deadlines and needs, and
              providing training to navigate through Sovos software.
            </p>
          </div>
        </div>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>May 2022 - December 2022</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job"> RollingCode School </div>
              Tutor in Programming Classes
            </h6>
            <p>
              I worked at Rolling Code School from May to December as Tutor or
              Teacher Assitant in Programming Classes teaching students
              Javascript, HTML, CSS, Bootrstrap, ReactJS, MongoDB, Mongoose,
              Express, NodeJS, Agile Methodologies and Git.
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
              Since graduated from Law School at University of Tucuman I have
              been self-employed as Attorney, working my own Law Office. For
              some particular cases I have also worked in partnership with
              colleagues.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
