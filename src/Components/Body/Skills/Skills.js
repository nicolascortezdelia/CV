import React from "react";
import '../Skills/skills.css'

const Skills = () => {
  return (
    <section className="skills row" id="skills">
      {/* Tittles of sections */}
      <div className="valign-wrapper">
        <div className="col s2 align-icons">
          <i className="fas fa-2x fa-lightbulb sections-icons"></i>
        </div>
        <div className="col s10">
          <h5 className="tittle-weight">
            <b>
              PROF SKILLS &<br />
              LANGUAGE SKILLS
            </b>
          </h5>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Skills;
