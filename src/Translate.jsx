import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Translate.css";

export default function Translate() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    let newLanguage;
    if (language === "en") {
      newLanguage = "es";
    } else {
      newLanguage = "en";
    }
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="language mt-2">
      <button onClick={toggleLanguage} title="Translate">
        {language === "en" ? "Esp" : "En"}
      </button>
    </div>
  );
}
