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
          time: {
            hour: "{{hours}} hour",
            hour_plural: "{{hours}} hours",
          },
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
            title: "Surveys",
            buttons: {
              restartForm: "Restart survey",
              prevForm: "Back",
              submitForm: "Complete",
              nextForm: "Next",
            },
            completedScreen: {
              title: "1 click away and you're done!",
              subtitle:
                "You can go back and check for any mistakes before submitting your answers",
            },
            userDataForm: {
              title: "Personal User Data",
              description:
                "Questions about your personal information and preferences",
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
              title: "Academic Evaluation",
              description: "Questions about this school year",
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
                  labelDefault: "I assisted to all classes",
                  label: "I {{assisted}} to all classes",
                  labelAlternative: "Did you assist to all classes?",
                  ego: "I",
                  label_context: {
                    true: "assisted",
                    false: "didn't assist",
                  },
                },
              },
            },
            techPreferences: {
              title: "Tech Prefences",
              description: "Questions about technology",
              questions: {
                techComment: {
                  label:
                    "What technology would you like to learn in the future?",
                  placeholder:
                    "Tell us which technology do you think would make you able to do great things",
                },
                favoriteOS: {
                  label: "Select your favorite OS",
                  placeholder: "Select an OS",
                },
                userDevices: {
                  label: "Which devices do you normally use?",
                  placeholder: "Select 1-2 devices that you use",
                },
                learningTime: {
                  label: "How many hours do you dedicate on learning tech?",
                  placeholder: "Select an estimated time",
                },
              },
            },
            filmPreferences: {
              title: "Film Prefences",
              description: "Questions about films",
              questions: {
                filmGenres: {
                  label: "What film genres do you like?",
                  placeholder: "Choose the options or write your own option",
                  data: ["Action", "Sci-fi", "Comedy", "Horror"],
                  defaultValues: ["Action", "Horror"],
                },
                favoriteFilm: {
                  label: "What is your favorite movie?",
                  placeholder: "Write down the one that you liked the most",
                },
                watchedFilms: {
                  label: "Select the movies that you've watched",
                  placeholder: "Open and click the movies that you've watched",
                },
                frequencyWatchingFilms: {
                  label: "How often do you watch movies?",
                  data: ["Never", "Barely", "Sometimes", "Often", "Always"],
                },
              },
            },
          },
        },
      },
    },
  });
