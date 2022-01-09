import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import "../Assets/styles/landingpage.scss";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page-container">
        <div className="row justify-content-center">
          <div className="jumbo-text p-5 m-5 col-lg-4">
            <h2>Hello, and welcome to</h2>
            <h1>Hike It</h1>
            <p className="mt-4">Find, save, and track your next adventure!</p>
            <p className="mt-5">
              <Button variant="warning">
                <Link to="./Login" alt="login" style={{ color: white }}>
                  Let's Go For A Hike!
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
