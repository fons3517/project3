import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../Assets/styles/login.scss";
import { Form, Col, Button, Alert } from "react-bootstrap";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  return (
    <>
      <div className="image-container text-center">
        <div className="row justify-content-center">
          <div className="login-text p-5 m-5 col-lg-4">
            <div className="row pb-3 text-center">
              <div className="container-title col-md-12 mb-3">
                <h1>Hike It Login</h1>
              </div>
              <div className="col-md-12 mt-2 mb-2">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleFormSubmit}
                >
                  <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                  >
                    Something went wrong with your login credentials!
                  </Alert>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label htmlFor="email" className="text-dark">
                        Email
                      </Form.Label>
                      <Form.Control
                        name="email"
                        type="text"
                        placeholder="Enter your email..."
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Email is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label htmlFor="password" className="text-dark">
                        Password
                      </Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Please enter your password..."
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Password is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Button
                    disabled={!(userFormData.email && userFormData.password)}
                    type="submit"
                    variant="success"
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </div>
            <div className="row pb-3 text-center">
              <div className="container-title col-md-12 mt-3 mb-3">
                <Button variant="success" style={{ width: "50%" }}>
                  <Link to="./signup" alt="register" style={{ color: "white" }}>
                    Signup
                  </Link>
                </Button>
              </div>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
