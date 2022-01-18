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
      <Footer />
    </>
  );
};

export default Home;