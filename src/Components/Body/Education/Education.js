import React from 'react';
import '../Education/education.css';
import Fade from 'react-reveal/Fade';

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
            <h6>2021 - 2022</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Full stack Web Developer Course</h6>
            <p>Rolling Code School </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2021</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Personal Data Protection Post Graduate Degree</h6>
            <p>Austral University</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2020-2021</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Law, Innovation and Technology Post Graduate Degree</h6>
            <p>University of Tucuman</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2011-2017</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Law Degree</h6>
            <p>
              Law School - University of Tucuman
              <br />
            </p>
          </div>
        </div>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2011</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>Oratory and Communications Skills Course</h6>
            <p>Santo Tomás de Aquino University</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2005 - 2010</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>High School</h6>
            <p> Colegio Tulio García Fernández</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="row content-sections">
          <div className="col s12 m4 xl3 center-align bg-years">
            <h6>2008</h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>PRELIMINARY ENGLISH TEST</h6>
            <p> University of Cambridge</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Education;
