<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import {
//   Jumbotron,
//   Container,
//   Col,
//   Form,
//   Button,
//   Card,
//   CardColumns
// } from "react-bootstrap";
// import { locationApi } from "../utils/API";
// import { searchTrailApi } from "../utils/API";
// import Auth from "../utils/auth";
// import { saveTrailIds, getSavedTrailIds } from "../utils/localStorage";
// import { useMutation } from "@apollo/client";
// import { ADD_HIKE } from "../utils/mutations";
// import { SAVE_TRAIL } from "../utils/mutations";


=======
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
>>>>>>> 4e47cfaabcf211bc1a5e60b3d241bfedc66a8b57
