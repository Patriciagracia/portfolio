import React from "react";
import Typewriter from "typewriter-effect";
import "./styles/AnimatedText.css";

export default function AnimatedText() {
  return (
    <div className="container mt-5">
      <p className="AnimatedTextParagraph">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["Send me an e-mail:", "Envíame un correo:"],
          }}
        />
      </p>
    </div>
  );
}
