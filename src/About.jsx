import React from "react";
import Footer from "./Footer";
import "./App.css";
import "./styles/About.css";
import test1 from "./styles/test1.png";

export default function About() {
  return (
    <>
      <div className="content-container container mb-4">
        <div className="row">
          <div className="col-lg-6 mb-2aboutDescription">
            <div className="content">
              <h1 className="mb-4">Hello! I am Patricia Gracia</h1>
              <p className="mt-2 mb-4">
                I am a front-end developer transitioning from a background as a
                self-employed psychologist. During my time as a therapist, I
                developed crucial skills such as problem-solving, efficient time
                management, and meticulous attention to detail. I am excited to
                bring these skills to my new passion for front-end development,
                creating projects that are both functional and visually
                appealing.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-2">
            <img
              src={test1}
              className="img-fluid mt-4"
              alt="Patricia's photo"
            />
          </div>
          <div className="row skills">
            <div className="col-12 col-md-2">
              <li>
                <h2>Skills</h2>
              </li>
            </div>
            <div className="col-12 col-md-10">
              <div className="row mt-3">
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">LANGUAGES</li>
                    <li>JavaScript</li>
                    <li>HTML, CSS</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">FRAMEWORKS</li>
                    <li>React</li>
                    <li>Vite</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <ul>
                    <li className="liTitle mb-2">TOOLS</li>
                    <li>GitHub</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Jira</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="facts">
          <div className="row mt-5 mb-6">
            <h2 className="col-12 mt-3 text-start">
              Quick random facts to get to know me better:
            </h2>
            <div className="row mt-3">
              <ul className="text-start container ms-3">
                <li>
                  {" "}
                  I've never imagined myself loving to code, but here I am!
                </li>
                <li> I'm a morning person.</li>
                <li>
                  {" "}
                  I practice calisthenics (my current goal is to do a
                  muscle-up).
                </li>
                <li>
                  {" "}
                  My hometown is Zaragoza, but I currently live in Menorca. I
                  also have lived in Madrid and Nottingham.
                </li>
                <li>I really (like, REALLY) enjoy specialty coffee.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
