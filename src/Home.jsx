import { useTranslation } from "react-i18next";
import "./styles/Home.css";
import Footer from "./Footer";
import portfolioImg1 from "./styles/images/portfolioImg1.png";
import portfolioImg2 from "./styles/images/portfolioImg2.jpeg";
import portfolioImg3 from "./styles/images/portfolioImg3.png";
import portfolioImg4 from "./styles/images/portfolioImg4.png";

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
            <a
              href="https://currency-converter-alpha-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={portfolioImg1}
                className="img-fluid"
                alt="Currency Converter screenshot"
                title="Currency Converter screenshot"
              />
            </a>
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            id="projects"
          >
            <div className="project-description">
              <div className="col d-block d-md-none">
                <a
                  href="https://currency-converter-alpha-lilac.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={portfolioImg1}
                    className="img-fluid"
                    alt="Currency Converter screenshot"
                    title="Currency Converter screenshot"
                  />
                </a>
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
                <a
                  href="https://waitlist-blond.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={portfolioImg3}
                    className="img-fluid"
                    alt="Waitlist Screenshot"
                    title="Waitlist Screenshot"
                  />
                </a>
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
            <a
              href="https://waitlist-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={portfolioImg3}
                className="img-fluid"
                alt="Waitlist Screenshot"
                title="Waitlist Screenshot"
              />
            </a>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-none d-md-block">
            <a
              href="https://coffee-landing-page-seven.vercel.app/"
              target="_blank"
              src={portfolioImg2}
              rel="noopener noreferrer"
            >
              <img
                src={portfolioImg2}
                className="img-fluid"
                alt="Coffee Site screenshot"
                title="Coffee Site  screenshot"
              />
            </a>
          </div>
          <div
            className="col d-flex align-items-center justify-content-center"
            id="projects"
          >
            <div className="project-description">
              <div className="col d-block d-md-none">
                <a
                  href="https://coffee-landing-page-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={portfolioImg2}
                    className="img-fluid"
                    alt="Coffee Site screenshot"
                    title="Coffee Site  screenshot"
                  />
                </a>
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
          <div className="row mb-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div className="project-description mt-5">
                <div className=" d-block d-md-none mb-5">
                  <a
                    href="https://waitlist-blond.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={portfolioImg4}
                      className="img-fluid"
                      alt="Severance Screenshot"
                      title="Severance Screenshot"
                    />
                  </a>
                </div>
                <h2 className="mb-4 mt-2">{t("project4.title")}</h2>
                <p className="mb-2 text-muted">{t("project4.description")}</p>
                <div className="row">
                  <div className="col-6">
                    <ul className="text-muted">
                      <li>{t("project4.technologies.vite")}</li>
                      <li>{t("project4.technologies.react")}</li>
                      <li>{t("project4.technologies.htmlcss")}</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="text-muted">
                      <li>{t("project4.technologies.bootstrap")}</li>
                      <li>{t("project4.technologies.vercel")}</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-2">
                  <a href="https://severance-nine.vercel.app/" className="btn">
                    {t("project2.button")}
                  </a>
                  <span className="p-2">
                    <a
                      href="https://github.com/Patriciagracia/severance/tree/main"
                      className="btn"
                    >
                      {t("project2.repoBtn")}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <a
                href="https://severance-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={portfolioImg4}
                  className="img-fluid"
                  alt="Severance Screenshot"
                  title="Severance Screenshot"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
