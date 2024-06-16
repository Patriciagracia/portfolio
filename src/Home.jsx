import React from "react";
import "./styles/Home.css";
import Footer from "./Footer";
import img2 from "./styles/img2.jpeg";
import portfolioImg1 from "./styles/portfolioImg1.png";

export default function Home() {
  return (
    <>
      <div className="hero">
        <p>👋 Hi, I am</p>
        <h1>Patricia Gracia</h1>
        <h2 className="mb-4">
          Welcome to my portfolio, take a look at my recent projects 👩🏻‍💻
        </h2>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col d-none d-lg-block">
            <img src={portfolioImg1} className="img-fluid" alt="" />
          </div>
          <div className="col" id="projects">
            <div className="project-description">
              <h2 className="mb-5 mt-2">Currency Converter App</h2>
              <p className="mb-5 text-muted">
                This project is <strong>built with React</strong> and uses the
                <strong> Frankfurter API</strong> to get the current exchange
                rates, so users always have the latest currency data. It has an
                easy-to-use interface that makes converting between different
                currencies simple. <strong> The design is responsive </strong>,
                meaning it works well on both desktop and mobile devices.
              </p>

              <a
                href="https://currency-conversion-gray.vercel.app/"
                className="btn btn-branding-outline"
              >
                See Live Website
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <div className="project-description mt-5">
                <h2 className="mb-5 mt-2">Coffee Shop Homepage</h2>
                <p className="mb-5 text-muted">
                  I created a one-page website inspired by the style of a coffee
                  shop website I like. This project is built using{" "}
                  <strong> React </strong> and has a modern and clean look. The
                  design is <strong> responsive</strong>, so it works well on
                  both desktop and mobile devices. This project shows my ability
                  to take inspiration from other designs, use React and create
                  responsive web applications that are easy to use.
                </p>
                <a
                  href="https://coffee-landing-page-seven.vercel.app/"
                  className="btn btn-branding-outline"
                >
                  See Live Website
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img src={img2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
