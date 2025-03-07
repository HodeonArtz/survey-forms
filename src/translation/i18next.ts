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
          appearance: {
            theme: {
              lightMode: "Light mode",
              darkMode: "Dark mode",
            },
          },
          routes: {
            home: {
              label: "Home",
              description: "Surveeform's home page",
            },
            surveys: {
              label: "Surveys",
              description: "Answer some questions",
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
