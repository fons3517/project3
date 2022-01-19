import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/home.scss";
import { Form, Col, Button, Alert, Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-page-container"></div>
      <div className="stats-container">
        <div className="stats-module-container">
          <div className="stats-module-title">134.7%</div>
          <div className="stats-module-subtitle">more hikers than 2019</div>
          <div className="stats-module-text">
            More and more people are getting outdoors and finding an adventure.
          </div>
        </div>
        <div className="stats-module-container">
          <div className="stats-module-title">57 mil</div>
          <div className="stats-module-subtitle">fellow hikers</div>
          <div className="stats-module-text">
            Share your adventures and learn from our global community
          </div>
        </div>
        <div className="stats-module-container">
          <div className="stats-module-title">550 cal</div>
          <div className="stats-module-subtitle">burned hiking an hour</div>
          <div className="stats-module-text">
            Rev up your aerobic activity with easy to challenging trails.
          </div>
        </div>
      </div>
      <div className="picture-container">
        <div className="picture-content-container">
          <h1 className="picture-content-titleTop">Find your trail</h1>
          <h1 className="picture-content-titleBottom">with ease</h1>
          <p className="picture-content-text">
            Let us guide you wherever the trail will go.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
