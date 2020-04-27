import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer class="page-footer scrollspy" id="gitlab">
      <div class="container">
        <div class="row container-footer">
          <div class="col s12">
            <h5 class="white-text">Jonathan Plodzien</h5>
          </div>
          <div class="col s12">
            <a href="https://github.com/JonyPlo" target="_blank">
              <i class="fab fa-github white-text"></i>
            </a>
            <a href="https://gitlab.com/Joonyyplo" target="_blank">
              <i class="fab fa-gitlab white-text"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-plodzien-22baa376/"
              target="_blank"
            >
              <i class="fab fa-linkedin white-text"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
