import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/contact.scss";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 pt-3 mt-5 contact-text-container border-radius top">
              <h1>This Page Is Under Construction. Come Back Soon!</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
