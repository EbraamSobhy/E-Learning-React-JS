import React from "react";
import { Helmet } from "react-helmet";
import "./css.css";
import cssLogo from "./CSS.png";

const CSS = () => {
  return (
    <div className="css-container">
      <Helmet>
        <title>CSS</title>
      </Helmet>
      <ul className="css-sidebar">
          <img
              src={cssLogo}
              className="css-sidebar-image"
              alt="CSS Logo"
          />
        <li>
          <a href="index.html" className="sidebar-link">
            Home
          </a>
        </li>
        <li>
          <a href="index1.html" className="sidebar-link">
            Photos
          </a>
        </li>
        <li>
          <a href="index2.html" className="sidebar-link">
            Videos
          </a>
        </li>
        <li>
          <a href="index3.html" className="sidebar-link">
            Faltaous
          </a>
        </li>
        <li>
          <a href="index4.html" className="sidebar-link">
            Books
          </a>
        </li>
      </ul>

      <div className="css-content">
        <h1 className="css-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default CSS;
