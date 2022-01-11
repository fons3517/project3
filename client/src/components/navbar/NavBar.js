import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "../../components/logout/Logout";
import AppTitle from "../appTitle/AppTitle";
import "../../Assets/styles/navbar.scss";

/*
this page will render all the navigation links when logged in..
(My Hikes, My Trails, Find A Hike, Profile, Contact, and Logout)...
when not logged in...
it will just render Login, Signup, and Contact
*/

const NavBar = () => {
  if (localStorage.getItem("__token__")) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/myhikes">
            <AppTitle />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/myHikes" alt="home">
              My Hikes
            </Link>
            <Link className="nav-link" to="/myTrails" alt="trails">
              My Trails
            </Link>
            <Link className="nav-link" to="/findAHike" alt="find">
              Find A Hike
            </Link>
            <Link className="nav-link" to="/profile" alt="profile">
              Profile
            </Link>
            <Link className="nav-link" to="/contact" alt="contact">
              Contact
            </Link>
            <Logout />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <AppTitle />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/login" alt="login">
            Login
          </Link>
          <Link className="nav-link" to="/signup" alt="signup">
            Signup
          </Link>
          <Link className="nav-link" to="/contact" alt="contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
