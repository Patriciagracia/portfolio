import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import homeEn from "./i18n/en/home.json";
import homeEs from "./i18n/es/home.json";
import aboutEn from "./i18n/en/about.json";
import aboutEs from "./i18n/es/about.json";
import navbarEn from "./i18n/en/navbar.json";
import navbarEs from "./i18n/es/navbar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        home: homeEn,
        about: aboutEn,
        navbar: navbarEn,
      },
      es: {
        home: homeEs,
        about: aboutEs,
        navbar: navbarEs,
      },
    },
  });

export default i18n;
