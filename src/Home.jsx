import { useTranslation } from "react-i18next";
import "./styles/Home.css";
import Footer from "./Footer";
import portfolioImg1 from "./styles/images/portfolioImg1.png";
import portfolioImg2 from "./styles/images/portfolioImg2.jpeg";
import portfolioImg3 from "./styles/images/portfolioImg3.png";

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
        <div className="row mb-5">
          <div className="col d-none d-md-block">
            <img
              src={portfolioImg1}
              className="img-fluid"
              alt="Currency Converter screenshot"
              title="Currency Converter screenshot"
            />
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            id="projects"
          >
            <div className="project-description">
              <div className="d-block d-md-none mb-5">
                <img
                  src={portfolioImg1}
                  className="img-fluid"
                  alt="Currency Converter screenshot"
                  title="Currency Converter screenshot"
                />
              </div>
              <h2 className="mb-4 mt-2">{t("project1.title")}</h2>
              <p className="mb-2 text-muted">{t("project1.description")}</p>
              <div className="row">
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project1.technologies.vite")}</li>
                    <li>{t("project1.technologies.react")}</li>
                    <li>{t("project1.technologies.htmlcss")}</li>
                    <li>{t("project1.technologies.chart")}</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project1.technologies.bootstrap")}</li>
                    <li>{t("project1.technologies.vercel")}</li>
                    <li>{t("project1.technologies.api")}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <a
                  href="https://currency-converter-alpha-lilac.vercel.app/"
                  className="btn"
                >
                  {t("project1.button")}
                </a>
                <span className="p-2">
                  <a
                    href="https://github.com/Patriciagracia/Currency-Conversion-App"
                    className="btn"
                  >
                    {t("project1.repoBtn")}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="project-description mt-5">
              <div className=" d-block d-md-none mb-5">
                <img
                  src={portfolioImg3}
                  className="img-fluid"
                  alt="Waitlist Screenshot"
                  title="Waitlist Screenshot"
                />
              </div>
              <h2 className="mb-4 mt-2">{t("project2.title")}</h2>
              <p className="mb-2 text-muted">{t("project2.description")}</p>
              <div className="row">
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project2.technologies.vite")}</li>
                    <li>{t("project2.technologies.react")}</li>
                    <li>{t("project2.technologies.htmlcss")}</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project2.technologies.bootstrap")}</li>
                    <li>{t("project2.technologies.vercel")}</li>
                    <li>{t("project2.technologies.emailJS")}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <a href="https://waitlist-blond.vercel.app/" className="btn">
                  {t("project2.button")}
                </a>
                <span className="p-2">
                  <a
                    href="https://github.com/Patriciagracia/Waitlist"
                    className="btn"
                  >
                    {t("project2.repoBtn")}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col d-none d-md-block">
            <img
              src={portfolioImg3}
              className="img-fluid"
              alt="Waitlist Screenshot"
              title="Waitlist Screenshot"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-none d-md-block">
            <img
              src={portfolioImg2}
              className="img-fluid"
              alt="Coffee Site screenshot"
              title="Coffee Site  screenshot"
            />
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            id="projects"
          >
            <div className="project-description">
              <div className="col d-block d-md-none">
                <img
                  src={portfolioImg2}
                  className="img-fluid"
                  alt="Coffee Site screenshot"
                  title="Coffee Site  screenshot"
                />
              </div>
              <h2 className="mb-4 mt-2">{t("project3.title")}</h2>
              <p className="mb-2 text-muted">{t("project3.description")}</p>
              <div className="row">
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project3.technologies.vite")}</li>
                    <li>{t("project3.technologies.react")}</li>
                    <li>{t("project3.technologies.htmlcss")}</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="text-muted">
                    <li>{t("project3.technologies.bootstrap")}</li>
                    <li>{t("project3.technologies.vercel")}</li>
                    <li>{t("project3.technologies.npm")}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <a
                  href="https://coffee-landing-page-seven.vercel.app/"
                  className="btn"
                >
                  {t("project3.button")}
                </a>
                <span className="p-2">
                  <a
                    href="https://github.com/Patriciagracia/coffee-landing-page"
                    className="btn"
                  >
                    {t("project3.repoBtn")}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
