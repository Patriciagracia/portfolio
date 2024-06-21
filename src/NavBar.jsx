import React from "react";
import "./styles/NavBar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Translate from "./Translate";

export default function navBar() {
  const { t } = useTranslation("navbar");
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
                {t("navbar.home")}
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/about">
                {t("navbar.about")}
              </Link>
            </li>
            <li id="switch" className="ms-auto">
              <DarkMode />
            </li>
            <li className="ms-auto">
              <Translate />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
