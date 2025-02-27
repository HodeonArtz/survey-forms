import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export default i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          routes: {
            home: "Home",
            form: {
              label: "Form",
              description: "Answer the forms",
            },
            results: {
              label: "Results",
              description: "Check your answers",
            },
          },
        },
      },
    },
  });
