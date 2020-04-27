import React from "react";
import "../src/app.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Picture from "./Components/Aside/Picture/Picture";
import OrangeBox from "./Components/Aside/OrangeBox/OrangeBox";
import Contact from "./Components/Aside/Contact/Contact";
import Experience from "./Components/Body/Experience/Experience";
import Education from "./Components/Body/Education/Education";
import Skills from "./Components/Body/Skills/Skills";
import Portfolio from "./Components/Body/Portfolio/Portfolio";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <ul class="section table-of-contents">
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Prof Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <main className="container">
        <div className="row">
          <div
            className="col s12 m5 l5 xl4 grey darken-3 column-aside"
            height="100"
          >
            <Picture />
            <div className="box-position">
              <OrangeBox />
            </div>
            <Contact />
          </div>
          <div className="col s12 m7 l7 xl8 sections">
            <Experience />
            <Education />
          </div>
          <div className="col s12 sections">
            <Skills />
            <Portfolio />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
