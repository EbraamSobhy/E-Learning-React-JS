import React from "react";
import { Helmet } from "react-helmet";
import "./nodejs.css";
import nodeLogo from "./nodejs.jpg";

const NodeJS = () => {
  return (
    <div className="nodejs-container">
      <Helmet>
        <title>NodeJS</title>
      </Helmet>
      <ul className="nodejs-sidebar">
        <img
          src={nodeLogo}
          className="nodejs-sidebar-image"
          alt="NodeJS Logo"
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

      <div className="nodejs-content">
        <h1 className="nodejs-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default NodeJS;
