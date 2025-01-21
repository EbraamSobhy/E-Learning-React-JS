import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./html.css";
import html from "./html.png";

const HTML = () => {
  const [code, setCode] = useState("");

  const runCode = () => {
    const iframe = document.getElementById("codeFrame");
    iframe.srcdoc = code;
  };

  return (
    <div className="html-container">
      <Helmet>
        <title>HTML</title>
      </Helmet>
      <ul className="html-sidebar">
        <img src={html} className="html-sidebar-image" alt="HTML" />
        <li><a href="/beginning" className="sidebar-link">Beginning</a></li>
        <li><a href="/intermediate" className="sidebar-link">Intermediate</a></li>
        <li><a href="/advanced" className="sidebar-link">Advanced</a></li>
        <li><a href="/videos" className="sidebar-link">Videos</a></li>
        <li><a href="/editor" className="sidebar-link">Editor</a></li>
      </ul>

      <div className="html-content">
        <h1 className="html-content-heading"><b>HTML Tutorial</b></h1>
        <section className="html-section">
          <h2 className="html-section-heading">HTML Basics</h2>
          <p className="html-description">Learn how to create a simple HTML page.</p>
          <pre className="html-code-block">
            <code className="html-code">{`<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}</code>
          </pre>
          
          <h2 className="html-section-heading">Try it Yourself</h2>
          <iframe id="codeFrame" className="html-iframe" src="about:blank" width="100%" height="400px"></iframe>
          <h2 className="html-section-heading">Write HTML</h2>
          <textarea
            id="htmlCode"
            className="html-textarea"
            placeholder="Write your HTML code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="html-button" onClick={runCode}>Run Code</button>
        </section>
      </div>
    </div>
  );
};

export default HTML;
