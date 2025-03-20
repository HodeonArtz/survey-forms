import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// En este archivo poodremos configurar la parte de traducción de la página

export default i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // Habilitamos el debug para poder solucionar mejor los problemas que vayan saliendo
    fallbackLng: "en", // Escogemos el idioma por defecto para aquellas partes de la página
    // que no tengan su traducción para el lenguaje utilizado por el navegador
    resources: {
      // en resources tendremos todas las traducciones para el contenido de la página
      en: {
        translation: {
          time: {
            hour_one: "{{count}} hour",
            hour_other: "{{count}} hours",
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
          home: {
            title: {
              weCollect: "We collect",
              yourData: "your data",
              toImprove: "to improve our products",
            },
            subtitle:
              "Submit a survey about general preferences and we will customize our products to your liking. Be free to answer anything.",
            startButton: "Start Now",
          },
          forms: {
            noResults: "No survey submitted. Start answering the surveys ",
            here: "here",
            title: "Surveys",
            buttons: {
              restartForm: "Restart survey",
              prevForm: "Back",
              submitForm: "Complete",
              nextForm: "Next",
              finish: "Finish",
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
                preferredSchedules: {
                  label: "Which schedules do you prefer for class?",
                  placeholder:
                    "Select 1-2 schedules that work the best for you",
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
                  labelAlternative: "Your favorite OS",
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
                  labelAlternative: "Your frequency watching movies",
                  data: ["Never", "Barely", "Sometimes", "Often", "Always"],
                },
              },
            },
          },
        },
      },
      es: {
        translation: {
          time: {
            hour_one: "{{count}} hora",
            hour_other: "{{count}} horas",
          },
          weekday: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
          },
          appearance: {
            theme: {
              lightMode: "Modo claro",
              darkMode: "Modo oscuro",
            },
          },
          routes: {
            home: {
              label: "Inicio",
              description: "Página de inicio de Surveeform",
            },
            surveys: {
              label: "Encuestas",
              description: "Responde algunas preguntas",
            },
            results: {
              label: "Resultados",
              description: "Mira tus respuestas",
            },
          },
          home: {
            title: {
              weCollect: "Recolectamos",
              yourData: "tus datos",
              toImprove: "para mejorar nuestros productos",
            },
            subtitle:
              "Completa una encuesta sobre preferencias generales y personalizaremos nuestros productos según tus gustos. Siéntete libre de responder cualquier cosa.",
            startButton: "Comenzar ahora",
          },
          forms: {
            noResults:
              "No se ha enviado ninguna encuesta. Comienza a responder las encuestas ",
            here: "aquí",
            title: "Encuestas",
            buttons: {
              restartForm: "Reiniciar encuesta",
              prevForm: "Atrás",
              submitForm: "Completar",
              nextForm: "Siguiente",
              finish: "Terminar",
            },
            completedScreen: {
              title: "¡A solo un clic de terminar!",
              subtitle:
                "Puedes regresar y revisar si hay errores antes de enviar tus respuestas",
            },
            userDataForm: {
              title: "Datos personales",
              description:
                "Preguntas sobre tu información personal y preferencias",
              questions: {
                userName: {
                  label: "Nombre completo",
                  placeholder: "Ejemplo: Juan Pérez",
                },
                userDOB: {
                  label: "Fecha de nacimiento",
                },
                userEmail: {
                  label: "Correo electrónico",
                },
                userGenre: {
                  label: "Género",
                  placeholder: "Elige una opción o escribe otra",
                  data: ["Masculino", "Femenino", "Prefiero no decirlo"],
                },
                userPreferences: {
                  label: "¿Qué haces en tu tiempo libre?",
                  placeholder: "Elige las opciones o escribe una propia",
                  data: [
                    "📕 Leer libros",
                    "⚽ Deportes",
                    "🛫 Viajar",
                    "🎬 Ver películas",
                  ],
                },
              },
            },
            academicEvaluation: {
              title: "Evaluación académica",
              description: "Preguntas sobre este año escolar",
              questions: {
                yearsComment: {
                  label: "¿Qué cosas podrían mejorar este año en general?",
                  placeholder:
                    "Danos sugerencias y comentarios para mejorar tu aprendizaje este año",
                },
                materialRating: {
                  label: "Califica el material de este año",
                },
                preferredSchedules: {
                  label: "¿Qué horarios prefieres para las clases?",
                  placeholder: "Selecciona 1-2 horarios que mejor te funcionen",
                },
                assistedToAllClasses: {
                  labelDefault: "Asistí a todas las clases",
                  label: "Yo {{assisted}} a todas las clases",
                  labelAlternative: "¿Asististe a todas las clases?",
                  ego: "Yo",
                  label_context: {
                    true: "asistí",
                    false: "no asistí",
                  },
                },
              },
            },
            techPreferences: {
              title: "Tecnología",
              description: "Preguntas sobre tecnología",
              questions: {
                techComment: {
                  label: "¿Qué tecnología te gustaría aprender en el futuro?",
                  placeholder:
                    "Dinos qué tecnología crees que te permitiría hacer grandes cosas",
                },
                favoriteOS: {
                  label: "Selecciona tu sistema operativo favorito",
                  labelAlternative: "Tu sistema operativo favorito",
                  placeholder: "Selecciona un sistema operativo",
                },
                userDevices: {
                  label: "¿Qué dispositivos usas normalmente?",
                  placeholder: "Selecciona 1-2 dispositivos que utilizas",
                },
                learningTime: {
                  label: "¿Cuántas horas dedicas a aprender tecnología?",
                  placeholder: "Selecciona un tiempo estimado",
                },
              },
            },
            filmPreferences: {
              title: "Películas",
              description: "Preguntas sobre cine",
              questions: {
                filmGenres: {
                  label: "¿Qué géneros de películas te gustan?",
                  placeholder: "Elige las opciones o escribe una propia",
                  data: ["Acción", "Ciencia ficción", "Comedia", "Terror"],
                  defaultValues: ["Acción", "Terror"],
                },
                favoriteFilm: {
                  label: "¿Cuál es tu película favorita?",
                  placeholder: "Escribe la que más te haya gustado",
                },
                watchedFilms: {
                  label: "Selecciona las películas que has visto",
                  placeholder: "Abre y haz clic en las películas que has visto",
                },
                frequencyWatchingFilms: {
                  label: "¿Con qué frecuencia ves películas?",
                  labelAlternative: "Tu frecuencia viendo películas",
                  data: ["Nunca", "Rara vez", "A veces", "A menudo", "Siempre"],
                },
              },
            },
          },
        },
      },
    },
  });
