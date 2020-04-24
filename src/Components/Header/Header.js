import React from "react";
import "../Header/header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="orange darken-4">
          <div className="nav-wrapper container">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <a href="#">Contact</a>
              </li>
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
              <a className="grey-text text-darken-3" href="#!">
                Experience
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#!">
                Education
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#!">
                Prof Skills & Language Skills
              </a>
            </li>
            <li>
              <a className="grey-text text-darken-3" href="#!">
                Porfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu burger button */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Home</a>
        </li>
        <li>
          <a href="badges.html">Experience</a>
        </li>
        <li>
          <a href="collapsible.html">Education</a>
        </li>
        <li>
          <a href="mobile.html">Prof Skills & Language Skills</a>
        </li>
        <li>
          <a href="mobile.html">Porfolio</a>
        </li>
        <li>
          <a href="mobile.html">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
