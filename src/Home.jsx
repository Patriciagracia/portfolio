import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/Home.css";
import Footer from "./Footer";
import img2 from "./styles/img2.jpeg";
import portfolioImg1 from "./styles/portfolioImg1.png";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <div className="hero">
        <p>👋 {t("greeting")}</p>
        <h1>{t("name")}</h1>
        <h2 className="mb-4">{t("welcome")}</h2>
      </div>
      <div className="container">
        <div className="container">
          <div className="row mb-5">
            <div className="col d-none d-lg-block">
              <img src={portfolioImg1} className="img-fluid" alt="" />
            </div>
            <div className="col" id="projects">
              <div className="project-description">
                <h2 className="mb-5 mt-2">{t("project1.title")}</h2>
                <p className="mb-5 text-muted">{t("project1.description")}</p>

                <a
                  href="https://currency-conversion-gray.vercel.app/"
                  className="btn"
                >
                  {t("project1.button")}
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mb-5">
              <div className="col">
                <div className="project-description mt-5">
                  <h2 className="mb-5 mt-2">{t("project2.title")}</h2>
                  <p className="mb-5 text-muted">{t("project2.description")}</p>
                  <a
                    href="https://coffee-landing-page-seven.vercel.app/"
                    className="btn"
                  >
                    {t("project2.button")}
                  </a>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
