import React from "react";
import { Link } from "react-router-dom";

// Remove Logout from NavBar after removing token

const Logout = () => {
  const handleClick = () => {
    try {
      // this is where we get token
      const token = localStorage.getItem("__token__");

      if (token) {
        // this is where we set token to expire
        document.cookie =
          "__token__=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

        // this is where we remove token from local storage
        localStorage.removeItem("__token__");

        // this is where we remove token from session storage
        sessionStorage.removeItem("__token__");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/" className="nav-link" onClick={handleClick}>
        Logout
      </Link>
    </>
  );
};

export default Logout;
