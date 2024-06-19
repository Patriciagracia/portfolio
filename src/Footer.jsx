import React from "react";
import githubLogo from "./styles/githubLogo.svg";
import AnimatedText from "./AnimatedText";
import "./styles/Footer.css";
import linkedinLogo from "./styles/linkedinLogo.svg";

export default function Footer() {
  return (
    <>
      <div className="footerContainer mt-4">
        <div className="animatedText">
          <AnimatedText />{" "}
        </div>
        <div className="footer d-flex justify-content-center mb-3">
          <a href="mailto:patricia@gmail.com" class="email-link">
            {" "}
            patriciagraciaherrero@gmail.com{" "}
          </a>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <a
            href="https://github.com/Patriciagracia"
            target="blank"
            title="GitHub profile"
            class="social-icon-wrapper"
          >
            <div className="github-icon">
              <img src={githubLogo} alt="GitHub Logo" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/patricia-gracia/"
            target="blank"
            title="LinkedIn profile"
            class="social-icon-wrapper"
          >
            <div className="linkedin-icon">
              <img src={linkedinLogo} alt="Linkedin Logo" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
