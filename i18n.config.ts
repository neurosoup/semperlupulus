import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translations/en.json";
import translationFR from "./translations/fr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  //lng: "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
