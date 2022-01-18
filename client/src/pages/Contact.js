import React from "react";
import "../Assets/styles/contact.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub);

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 pt-3 mt-5 contact-text-container border-radius top">
              <h1>Our Team Of Developers</h1>
            </div>
          </div>
          <div className="row text-center contact-text-container">
            <div className="col-md-1 m-0 p-0" />
            <div className="col-md-2 m-4 p-1">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Andrew</h3>
              <h3>Martinez</h3>
              <a href="https://github.com/andrew18929" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/andrew-martinez-03144b192"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-4 p-1">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Maria</h3>
              <h3>Vallejo</h3>
              <a href="https://github.com/Mvalljo" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/maria-vallejo-8237a41a6/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-4 p-1">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Matheww</h3>
              <h3>Wiessing</h3>
              <a href="https://github.com/Kiasiri" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
              <a
                href="http://www.linkedin.com/in/matthew-wiessing-06b754214"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
            </div>
            <div className="col-md-2 m-4 p-1">
              <img
                className="img-fluid"
                src="assets/images/andrew.JPG"
                alt="Andrew"
              />
              <h3>Alfonso</h3>
              <h3>Robles</h3>
              <a href="https://github.com/fons3517" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alfonso-robles-3517-agr/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ color: "blue" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
