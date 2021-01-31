import React from "react";
import Globe from "../Assets/globe.gif";
import "./styling.css";

export default function NavBar() {
  return (
    <div id="navbar-container">
      <img src={Globe} alt="Globe" className="globe" />
      <p id="navbar-text"> Countries of the World </p>
    </div>
  );
}
