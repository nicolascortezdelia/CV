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
            <h6>
              November 2022 - <br /> Present
            </h6>
          </div>
          <div className="col s12 m8 xl9 content-border-left">
            <div className="circles"></div>
            <h6>
              <div className="job"> Sovos </div>
              Compliance Services Associate
            </h6>
            <p>
    As a Compliance Services Associate at Sovos my responsabilities are:
    <ul>
        <li>- Assist mostly US-based clients to be compliant with their taxes, and meet all their regulatory deadlines for 1099 form types, B-Notices, and P-Notices. </li>
        <li>- Handle W9s.</li>
        <li>- Manage the flow of day-to-day tasks and questions from clients.</li>
        <li>- Manage accounts for important clients</li>
        <li>- Provide training to navigate through Sovos software.</li>
        <li>- Utilize CRM system</li>
        <li>- Identify, prioritize, and resolve client issues.</li>
        <li>- Coordinate appropriate internal departments to provide timely responses and solutions.</li>
        <li>- Identify process improvements and offer suggestions to build internal efficiencies, reduce risk, and lead internal process improvement projects.</li>
        <li>- Customer Services.</li>
        <li>- Data Entry.</li>
        <li>- Maintain goals and key measures to ensure progress and alignment with desired business outcomes for clients Ensure compliance with applicable taxing authorities (IRS, State and Local Governments) and client-specified procedures by adhering to internal policies and procedures.</li>
        <li>- Aid peers in building domain expertise and resolving client issues.</li>
        <li>- Develop reusable documentation and training material.</li>
        <li>- Lead training sessions.</li>
    </ul>
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
