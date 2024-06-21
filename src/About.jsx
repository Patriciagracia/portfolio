import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import "./App.css";
import "./styles/About.css";
import personalPhoto from "./styles/personalPhoto.png";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <>
      <div className="content-container container mb-4">
        <div className="row">
          <div className="col-lg-6 mb-2 aboutDescription">
            <div className="content">
              <h1 className="mb-4">{t("title")}</h1>
              <p className="mt-2 mb-4">{t("description")}</p>
            </div>
          </div>
          <div className="col-lg-6 mb-2">
            <img
              src={personalPhoto}
              className="img-fluid mt-4"
              alt="Patricia's photo"
            />
          </div>
          <div className="row skills">
            <div className="col-12 col-md-2">
              <li>
                <h2>{t("skillsTitle")}</h2>
              </li>
            </div>
            <div className="col-12 col-md-10">
              <div className="row mt-3">
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">{t("skills.languages")}</li>
                    <li>{t("skills.list.javascript")}</li>
                    <li>{t("skills.list.html_css")}</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">{t("skills.frameworks")}</li>
                    <li>{t("skills.list.react")}</li>
                    <li>{t("skills.list.vite")}</li>
                    <li>{t("skills.list.bootstrap")}</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">{t("skills.tools")}</li>
                    <li>{t("skills.list.github")}</li>
                    <li>{t("skills.list.vercel")}</li>
                    <li>{t("skills.list.netlify")}</li>
                    <li>{t("skills.list.jira")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="facts">
          <div className="row mt-5 mb-6">
            <h2 className="col-12 mt-3 text-start">{t("factsTitle")}</h2>
            <div className="row mt-3">
              <ul className="text-start container ms-3">
                {t("facts", { returnObjects: true }).map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
