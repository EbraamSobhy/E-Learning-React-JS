import React from "react";
import { Helmet } from "react-helmet";
import "./expressjs.css";
import expressLogo from "./express.png";

const ExpressJS = () => {
  return (
    <div className="expressjs-container">
      <Helmet>
        <title>ExpressJS</title>
      </Helmet>
      <ul className="expressjs-sidebar">
        <img
          src={expressLogo}
          className="expressjs-sidebar-image"
          alt="ExpressJS Logo"
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

      <div className="expressjs-content">
        <h1 className="expressjs-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default ExpressJS;
