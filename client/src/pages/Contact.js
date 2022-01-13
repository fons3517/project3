import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/contact.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub);

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 pt-3 mt-3 contact-text-container border-radius top">
              <h1>Our Team Of Developers</h1>
            </div>
          </div>
          <div className="row text-center contact-text-conainer">
            <div className="col-md-1 m-0 p-0" />
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Andrew Martinez</h3>
              <a href="https://github.com/andrew18929" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/andrew-martinez-03144b192"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Andrew Martinez</h3>
              <a href="https://github.com/andrew18929" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/andrew-martinez-03144b192"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Andrew Martinez</h3>
              <a href="https://github.com/andrew18929" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/andrew-martinez-03144b192"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-0 p-0">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Andrew Martinez</h3>
              <a href="https://github.com/andrew18929" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/andrew-martinez-03144b192"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "black" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
