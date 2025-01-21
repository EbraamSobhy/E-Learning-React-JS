import React from "react";
import { Helmet } from "react-helmet";
import "./mongodb.css";
import mongoLogo from "./mongo.png";

const MongoDB = () => {
  return (
    <div className="mongodb-container">
      <Helmet>
        <title>MongoDB</title>
      </Helmet>
      <ul className="mongodb-sidebar">
        <img
          src={mongoLogo}
          className="mongodb-sidebar-image"
          alt="MongoDB Logo"
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

      <div className="mongodb-content">
        <h1 className="mongodb-content-heading">
          <b>content will be added here</b>
        </h1>
      </div>
    </div>
  );
};

export default MongoDB;
