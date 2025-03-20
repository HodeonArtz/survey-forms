import { createFormContext } from "@mantine/form";

// Aqui definimos qué propiedades tienen todos los formularios y de qué tipo tienen que ser cada uno
export interface FormValues {
  userName: string;
  userDOB: string;
  userEmail: string;
  userGenre: string;
  userPreferences: string[];
  yearsComment: string;
  materialRating: number;
  assistedToAllClasses: boolean;
  preferredSchedules: (
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
  )[];
  techComment: string;
  favoriteOS?: "💻 Windows" | "🍎 MacOS" | "🐧 Linux";
  userDevices: ("smartphone" | "laptop" | "tablet" | "smartwatch")[];
  learningTime?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  filmGenres: string[];
  favoriteFilm: string;
  watchedFilms: ("Inception" | "The Matrix" | "Avengers" | "Titanic")[];
  frequencyWatchingFilms: number;
}

// Aquí creamos un contexto para gestionar los formularios desde varios componentes diferentes y evitar hacer prop drilling.
// SurveeFormProvider es el proveedor que permitirá indicar qué parte de los componentes estarán relacionados a los estados del formulario
// useSurveeFormContext es el hook que utilizaremos para conseguir el contexto del formulario
// useSurveeForm es el hook que nos permitirá configurar y setear los valores en el componente del formulario
export const [SurveeFormProvider, useSurveeFormContext, useSurveeForm] =
  createFormContext<FormValues>();

// valores por defecto para el formulario entero
export const formInitialValues: FormValues = {
  userName: "",
  userDOB: "",
  userEmail: "",
  userGenre: "",
  userPreferences: ["🎬 Watch movies", "📕 Read books"],
  yearsComment: "",
  materialRating: 3,
  assistedToAllClasses: true,
  preferredSchedules: [],
  techComment: "",
  favoriteOS: undefined,
  userDevices: [],
  learningTime: undefined,
  filmGenres: [],
  favoriteFilm: "",
  watchedFilms: [],
  frequencyWatchingFilms: 3,
};
