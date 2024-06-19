import React from "react";
import { useTranslation } from "react-i18next";
import languageIcon from "./styles/languageIcon.svg";

export default function Translate() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("en")}>English</button>
      <img src={languageIcon}></img>
    </div>
  );
}
