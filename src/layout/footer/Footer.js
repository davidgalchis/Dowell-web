import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="country">
        <h1>United Kingdom </h1>
        <div className="branches">
          <div className="state">
            <h1>London Office</h1>
            <span>Park Royal Road,</span>
            <span>London,</span>
            <span>United Kingdom.</span>
            <span>
              Email:
              <a href="mailto:Rodavanmateo@gmail.com/">
                Rodavanmateo@gmail.com
              </a>
            </span>
            <span>
              Phone: <span>+44 (752) 064 3398</span>
            </span>
          </div>
          <div className="state">
            <h1>Birmingham</h1>
            <span>Middlemore Industrial Estate,</span>
            <span>Birmingham,</span>
            <span>United Kingdom.</span>
          </div>
        </div>
      </div>
      <div className="country">
        <h1>South Africa </h1>
        <div className="state">
          <h1>South-western Office</h1>
          <span> South-western Cape region, </span>
          <span>South Africa.</span>
          <span>
            Email:
            <a href="mailto:info@matropetro.southafrica.com/">
              info@matrod.southafrica.com
            </a>
          </span>
        </div>
      </div>
      <div className="country">
        <h1>New Zealand</h1>
        <div className="state">
          <h1>South Island Office</h1>
          <span>Queenstown Lakes District</span>
          <span>South Island</span>
          <span>New Zealand.</span>
          <span>
            Email:
            <a href="mailto:info@matropetro.newzealand.com/">
              info@matrod.newzealand.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
