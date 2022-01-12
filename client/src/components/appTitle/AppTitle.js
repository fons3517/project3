import React from "react";
import "../../Assets/styles/apptitle.scss";

const AppTitle = () => {
  return (
    <>
      <span className="app-title">HIKE</span>
      <b
        className="app-title-small"
        style={{ color: "blue", WebkitTextStroke: "1px black" }}
      >
        It
      </b>
    </>
  );
};

export default AppTitle;
