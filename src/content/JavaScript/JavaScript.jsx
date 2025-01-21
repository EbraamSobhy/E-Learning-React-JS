import React from "react";
import { Helmet } from "react-helmet";
import "./javascript.css";
import javascriptLogo from "./js.png";

const JavaScript = () => {
  return (
    <div className="javascript-container">
      <Helmet>
        <title>JavaScript</title>
      </Helmet>
      <ul className="javascript-sidebar">
        <img
          src={javascriptLogo}
          className="javascript-sidebar-image"
          alt="JavaScript Logo"
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

      <div className="javascript-content">
        <h1 className="javascript-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default JavaScript;
