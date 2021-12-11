import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="page-footer scrollspy" id="gitlab">
      <div className="container">
        <div className="row container-footer">
          <div className="col s12">
            <h5 className="white-text">Jonathan Plodzien</h5>
          </div>
          <div className="col s12">
            <a
              href="https://github.com/JonyPlo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github white-text"></i>
            </a>
            <a
              href="https://gitlab.com/Joonyyplo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-gitlab white-text"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-plodzien-22baa376/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin white-text"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
