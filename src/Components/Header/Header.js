import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <header className="scrollspy">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              {/* Button dropdown */}
              <li>
                <a
                  class="dropdown-trigger"
                  href="#"
                  data-target="button-dropdown"
                >
                  Experience and more
                  <i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Dropdown button */}
          <ul id="button-dropdown" class="dropdown-content text-orange">
            <li>
              <a className="grey-text text-darken-3" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#education">
                Education
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#skills">
                Prof Skills & Language Skills
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#gitlab">
                Git & Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu burger button */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Prof Skills & Language Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#gitlab">Git & Linkedin</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
