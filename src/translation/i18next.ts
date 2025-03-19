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
          weekday: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
          },
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
          forms: {
            userDataForm: {
              questions: {
                userName: {
                  label: "Full name",
                  placeholder: "e.g. John Doe",
                },
                userDOB: {
                  label: "Date of birth",
                },
                userEmail: {
                  label: "Email",
                },
                userGenre: {
                  label: "Genre",
                  placeholder: "Choose one of the options or type other option",
                  data: ["Male", "Female", "I prefer not to say"],
                },
                userPreferences: {
                  label: "What do you do in your free time?",
                  placeholder: "Choose the options or write your own option",
                  data: [
                    "📕 Read books",
                    "⚽ Sports",
                    "🛫 Travel",
                    "🎬 Watch movies",
                  ],
                },
              },
            },
            academicEvaluation: {
              questions: {
                yearsComment: {
                  label: "What things could improve this year in general?",
                  placeholder:
                    "Give us some suggestions and feedback to improve your learning for this year",
                },
                materialRating: {
                  label: "Rate this year's material",
                },
                assistedToAllClasses: {
                  label: "I {{assisted}} to all classes",
                  label_context: {
                    true: "assisted",
                    false: "did not assist",
                  },
                },
                preferredSchedules: [],
              },
            },
          },
        },
      },
    },
  });
