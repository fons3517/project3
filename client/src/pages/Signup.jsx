import React, { useState } from "react";
import "../Assets/styles/signup.scss";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      console.log(data);
      Auth.login(data.addUser.token);
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
      <div className="register-container p-5">
        <div className="pt-5 justify-content-center">
          <div className="row justify-content-center p-3 ml-5 form-container">
            <div className="col-md-4 p-5">
              <h1 className="signup-title">Welcome to the world of hiking!</h1>
            </div>
            <div className="col-md-8  p-5">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleFormSubmit}
              >
                {/* show alert if server response is bad */}
                <Alert
                  dismissible
                  onClose={() => setShowAlert(false)}
                  show={showAlert}
                  variant="danger"
                >
                  Something went wrong with your signup!
                </Alert>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      type="text"
                      placeholder="Enter Your First Name..."
                      onChange={handleInputChange}
                      value={userFormData.firstName}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      First Name is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      placeholder="Enter Your Last Name..."
                      onChange={handleInputChange}
                      value={userFormData.lastName}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Last Name is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter Your Email..."
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
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Enter A Password..."
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
                  disabled={
                    !(
                      userFormData.firstName &&
                      userFormData.lastName &&
                      userFormData.email &&
                      userFormData.password
                    )
                  }
                  type="submit"
                  variant="success"
                >
                  Submit
                </Button>
              </Form>
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

export default SignupForm;
