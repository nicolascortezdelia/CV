import React from "react";
import "../Skills/skills.css";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import Fade from "react-reveal/Fade";

const Skills = () => {
  // Graphics Font size
  Chart.defaults.global.defaultFontFamily = "Lato";
  // Pie Graphic
  const dataPie = {
    labels: [
      "Node.js",
      "mongoDB",
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "Metodologias agiles",
    ],
    datasets: [
      {
        data: [30, 30, 70, 80, 95, 80, 100, 90, 80],
        backgroundColor: [
          "#215732",
          "#5dab50",
          "#61dafb",
          "#f9e64f",
          "#ef6026",
          "#0d73b7",
          "#563d7c",
          "#fca326",
          "#1e90ff",
        ],
        hoverBackgroundColor: [
          "#1a4628",
          "#4c8b41",
          "#57c3e0",
          "#dfcd46",
          "#ce5424",
          "#0d67a3",
          "#4e3870",
          "#db8e23",
          "#1b7ee2",
        ],
      },
    ],
  };

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
        data: [100, 40, 50, 60, 0],
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
              <b>PROF SKILLS & LANGUAGE SKILLS</b>
            </h5>
            <hr />
          </div>
        </div>
      </Fade>
      <div className="row">
        <Fade bottom>
          <div className="col s12 m6 l6 xl6 content-skills content-sections">
            <div className="circles"></div>
            <h6 className="bg-years">Pofessional Skills</h6>
            <Pie data={dataPie} width={160} />
          </div>
        </Fade>
        <Fade bottom>
          <div className="col s12 m6 l6 xl6 content-skills content-sections">
            <div className="circles"></div>
            <h6 className="bg-years">Language Skills</h6>
            <Bar data={dataBar} width={160} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
