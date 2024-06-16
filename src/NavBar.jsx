import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li id="switch" className="ms-auto">
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
