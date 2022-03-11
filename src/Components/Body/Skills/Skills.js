import React from "react";
import "../Skills/skills.css";

import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import Fade from "react-reveal/Fade";

const Skills = () => {
  // Graphics Font size
  Chart.defaults.global.defaultFontFamily = "Lato";
  // Pie Graphic
  

  // Bar Graphic
  const dataBar = {
    labels: [
      "Spanish (Native)",
      "Spoken English",
      "Written English",
      "English Understanding",
    ],
    datasets: [
      {
        label: ["Languages"],
        backgroundColor: "#e6510065",
        borderColor: "#e6510065",
        borderWidth: 1,
        hoverBackgroundColor: "#e6510096",
        hoverBorderColor: "#e65100",
        data: [100, 80, 70, 80, 0],
      },
    ],
  };

  return (
    <section className="skills row scrollspy" id="skills">
      <Fade bottom>
        {/* Tittles of sections */}
        <div className="valign-wrapper">
          <div className="col s2 m1 align-icons">
            <i className="fas fa-2x fa-lightbulb sections-icons"></i>
          </div>
          <div className="col s10 m11">
            <h5 className="tittle-weight">
              <b>PROFESSIONAL SKILLS & LANGUAGE SKILLS</b>
            </h5>
            <hr />
          </div>
        </div>
      </Fade>
      <div className="row">
        <Fade bottom>
          <div className="col s12 m6 l6 xl6 content-skills content-sections">
            
            <h4 className="bg-years">Professional Skills</h4>
            <hr />
            <div className="row content-sections">
            
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>React JS</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>JavaScript ECMAScript 6 </h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>Node JS</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>Express JS</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>Mongo DB</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>CSS</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>Bootstrap</h6>
             
            </div>
            <div className="col s12 m8 xl9">
              <div className="circles"></div>
              <h6>HTML</h6>
             
            </div>
          </div>
            
          </div>
        </Fade>
        <Fade bottom>
          <div className="col s12 m6 l6 xl6 content-skills content-sections">
            <div></div>
            <h4 className="bg-years">Language Skills</h4>
            <hr />
            <Bar data={dataBar} width={160} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
