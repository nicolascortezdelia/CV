import React from "react";
import "../Contact/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-contact">
        <h5>CONTACT</h5>
        <hr />
        <div>
          <div className="contact-row">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Tucumán,
              <br />
              San Miguel de Tucumán,
              <br />
              Argentina.
            </p>
          </div>
          <div className="contact-row">
            <i className="fas fa-phone-alt"></i>
            <p>
              +54 381 6126830
              <br />
              +54 381 4275968
            </p>
          </div>
          <div className="contact-row">
            <i className="fas fa-envelope"></i>
            <p>joonyyplo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
