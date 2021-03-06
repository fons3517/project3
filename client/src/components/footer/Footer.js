import React from "react";
import AppTitle from "../appTitle/AppTitle";
import "./Footer.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);

const Footer = () => {
  return (
    <footer className="pt-3 mt-auto">
      <div className="container-fluid text-center text-md-left">
        <div className="row mb-3">
          <div className="col-md-2" />
          <div className="col-md-5">
            <h5 className="app-title">
              <AppTitle />
            </h5>
            <p>
              The Hike It app allows users to search for hiking trails and track
              their hikes so that not only can they explore the beauty of the
              outdoors, but also keep distance tabs on their hiking excursions.
            </p>
          </div>
          <div className="col-md-5">
            <h5 className="section-title">Developers</h5>
            <div>
              <div className="developer-list">
                <a href="https://github.com/Mvalljo">Maria Vallejo</a>
              </div>
              <div className="developer-list">
                <a href="https://github.com/Kiasiri">Matthew Wiessing</a>
              </div>
              <div className="developer-list">
                <a href="https://github.com/fons3517">Alfonso Robles</a>
              </div>
              <div className="developer-list">
                <a href="https://github.com/andrew18929">Andrew Martinez</a>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
      <div className="row text-center copyright">
        <div className="col-lg-12 mt-3 mb-3">
          &copy; Copyright: 2022&nbsp;
          <a href="https://github.com/fons3517/project3">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
