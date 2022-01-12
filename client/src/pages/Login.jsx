import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "../Assets/styles/login.scss";
import { Form, Col, Button } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <NavBar />
      <div className="image-container text-center">
        <div className="row justify-content-center">
          <div className="login-text p-5 m-5 col-lg-4">
            <div className="row pb-3 text-center">
              <div className="col-md-12">
                <h1>Hike It Login</h1>
              </div>
              <div className="col-md-12 mt-2 mb-2">
                <Form onSubmit={handleFormSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        onChange={handleChange}
                        autoComplete="username"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Please enter your password..."
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant="success"
                    type="submit"
                    style={{ width: "100%" }}
                    onClick={handleFormSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
            <p className="mt-5">
              <Link to="./signup" alt="register" style={{ color: "black" }}>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
