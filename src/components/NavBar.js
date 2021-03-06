import React from "react";
import { Link } from "react-router-dom";
import Globe from "../Assets/globe.gif";
import "./CSS/styling.css";

export default function NavBar() {
  return (
    <Link to="/">
      <div id="navbar-container">
        <img src={Globe} alt="Globe" className="globe" />
        <p id="navbar-text"> Countries of the World </p>
      </div>
    </Link>
  );
}
