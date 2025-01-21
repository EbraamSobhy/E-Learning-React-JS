import React from "react";
import { Helmet } from "react-helmet";
import "./reactjs.css";
import reactLogo from "./react.png";

const ReactJS = () => {
  return (
    <div className="reactjs-container">
      <Helmet>
        <title>ReactJS</title>
      </Helmet>
      <ul className="reactjs-sidebar">
        <img
          src={reactLogo}
          className="reactjs-sidebar-image"
          alt="React Logo"
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

      <div className="reactjs-content">
        <h1 className="reactjs-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default ReactJS;
