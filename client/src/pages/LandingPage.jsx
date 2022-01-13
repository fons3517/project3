import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import AppTitle from "../components/appTitle/AppTitle";
import "../Assets/styles/landingpage.scss";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page-container">
        <div className="row justify-content-center">
          <div className="jumbo-text p-5 m-5 col-lg-4">
            <h2>Hello, and welcome to</h2>
            <h1 className="landing-app-title">
              <AppTitle />
            </h1>
            <p className="mt-4 message">
              Let us help you find, save, and track your next adventure!
            </p>
            <p className="mt-5">
              <Button variant="light">
                <Link
                  to="/login"
                  alt="login"
                  style={{ color: "blue", fontWeight: "bolder" }}
                >
                  Go For A Hike!
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
